import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSpotifyToken = async (code: string | null) => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  const authString = `${clientId}:${clientSecret}`;
  const encodedAuth = btoa(authString);

  const bodyParams = code
    ? new URLSearchParams({
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    })
    : new URLSearchParams({
      grant_type: 'client_credentials',
    });

  const response = await axios.post('https://accounts.spotify.com/api/token', bodyParams, {
    headers: {
      Authorization: `Basic ${encodedAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data.access_token;
};

export const useSpotifyToken = (code: string | null = null) => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: ['spotifyToken', code],
    queryFn: () => fetchSpotifyToken(code),
    enabled: !!code || code === null,
    retry: 1,
    staleTime: 3600000,
  });

  const handleTokenRefresh = () => {
    refetch();
  };
 
  return {
    accessToken: data || null,
    isLoading,
    isError,
    error: error instanceof Error ? error.message : null,
    handleTokenRefresh,
  };
};
