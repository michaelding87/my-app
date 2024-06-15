import React from 'react';
import SpotifyPlayer from './SpotifyPlayer'; // Import the SpotifyPlayer component
import './Tunes.css';

function Tunes() {
  return (
    <div>
      <h1>Tunes Page</h1>
      <p>This is the Tunes page.</p>
      <SpotifyPlayer /> {/* Add the SpotifyPlayer component here */}
    </div>
  );
}

export default Tunes;
