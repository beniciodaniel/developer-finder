import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
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

  async function handleAddDev(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data)
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
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer and Architect (Master in Civil Construction Engineering)</p>
            <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer and Architect (Master in Civil Construction Engineering)</p>
            <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer and Architect (Master in Civil Construction Engineering)</p>
            <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Developer and Architect (Master in Civil Construction Engineering)</p>
            <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;
