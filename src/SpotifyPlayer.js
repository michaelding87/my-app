import React from 'react';
import './SpotifyPlayer.css';

function SpotifyPlayer() {
  return (
    <div className="noBorder">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/0Hm0IIv82NMm02ItTS4Bd5?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;
