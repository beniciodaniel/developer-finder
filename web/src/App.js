import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Username from GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
                <span>ReactJS, React Native, Node.js, Laravel</span>
                <p>Developer and Architect (Master in Civil Construction Engineering)</p>
                <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js, Laravel</span>
                <p>Developer and Architect (Master in Civil Construction Engineering)</p>
                <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js, Laravel</span>
                <p>Developer and Architect (Master in Civil Construction Engineering)</p>
                <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
              </div>
            </header>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52285940?s=460&v=4" alt="Benício Daniel"/>
              <div className="user-info">
                <strong>Benício Daniel</strong>
                <span>ReactJS, React Native, Node.js, Laravel</span>
                <p>Developer and Architect (Master in Civil Construction Engineering)</p>
                <a href="https://github.com/beniciodaniel">Access GitHub profile</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
