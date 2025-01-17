// src/constants.ts
export const SPOTIFY_SCOPES = [
  'playlist-read-private',         // Access private playlists
  'playlist-read-collaborative',   // Access collaborative playlists
  'playlist-modify-public',        // Modify public playlists
  'playlist-modify-private',       // Modify private playlists
  'user-library-read',             // Access saved albums and tracks
  'user-library-modify',           // Save or remove tracks and albums
  'user-read-recently-played',     // Access recently played tracks
  'user-top-read',                 // Access top artists, tracks, and genres
  'user-read-playback-state',      // Access playback state
  'user-modify-playback-state',    // Control playback
  'user-read-currently-playing',   // Access currently playing track
].join(' ');
