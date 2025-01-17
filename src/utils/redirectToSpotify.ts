import { SPOTIFY_SCOPES } from '../constants/constants';

export const redirectToSpotify = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirectUri = encodeURIComponent(import.meta.env.VITE_SPOTIFY_REDIRECT_URI);
  const state = 'randomstring';
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${SPOTIFY_SCOPES}&state=${state}`;
  
  window.location.href = authUrl;
};
  