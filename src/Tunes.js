import React from 'react';
import SpotifyPlayer from './SpotifyPlayer'; // Import the SpotifyPlayer component
import 'bulma/css/bulma.min.css'; // Import Bulma CSS
import './Tunes.css'; // Custom styles for Tunes

function Tunes() {
  return (
    <div className="tunes-container">
      <h1 className="title">Tunes Page</h1>
      <p>This is the Tunes page.</p>
      <SpotifyPlayer /> 
    </div>
  );
}

export default Tunes;
