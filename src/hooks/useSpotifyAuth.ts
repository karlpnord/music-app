import { useContext } from 'react';
import { SpotifyAuthContext } from '../context/SpotifyAuthContext';

export const useSpotifyAuth = () => {
  const context = useContext(SpotifyAuthContext);

  if (!context) {
    throw new Error('useSpotifyAuth must be used within a SpotifyAuthProvider');
  }

  return context;
};
