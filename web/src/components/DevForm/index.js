import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

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

    async function handleSubmit(event) {
        event.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
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
    );
}

export default DevForm;