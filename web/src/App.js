import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  //which function () and when []
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>

        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Username from GitHub</label>
            <input 
              name="github_username" 
              id="github_username" required 
              value={github_username}
              onChange={event => setGithubUsername(event.target.value)}
              />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input 
              name="techs" 
              id="techs" required 
              value={techs}
              onChange={event => setTechs(event.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                id="latitude" required 
                value={latitude} 
                type="number"
                onChange={event => setLatitude=(event.target.value)}
                />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                id="longitude" required 
                value={longitude} 
                type="number" 
                onChange={event => setLongitude=(event.target.value)}
                />
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name} />
              <div className="user-info">
                <strong>{ dev.name }</strong>
                <span> {dev.techs.join(', ')} </span>
              </div>
            </header>
            <p> {dev.bio} </p>
            <a href={`https://github.com/${dev.github_username}`} >Access GitHub profile</a>
          </li>
          ))}        
        </ul>
      </main>
    </div>
  );
}

export default App;
