import { createContext } from 'react';

interface SpotifyAuthContextType {
  accessToken: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const SpotifyAuthContext = createContext<SpotifyAuthContextType | undefined>(undefined);