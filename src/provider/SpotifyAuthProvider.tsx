import { useState, ReactNode } from 'react';
import { SpotifyAuthContext } from '../context/SpotifyAuthContext';

interface SpotifyAuthProviderProps {
  children: ReactNode;
}

export const SpotifyAuthProvider = ({ children }: SpotifyAuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('spotifyAccessToken'));

  const setToken = (token: string) => {
    setAccessToken(token);
    localStorage.setItem('spotifyAccessToken', token);
  };

  const clearToken = () => {
    setAccessToken(null);
    localStorage.removeItem('spotifyAccessToken');
  };

  return (
    <SpotifyAuthContext.Provider value={{ accessToken, setToken, clearToken }}>
      {children}
    </SpotifyAuthContext.Provider>
  );
};