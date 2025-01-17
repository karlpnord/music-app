import { Link } from 'react-router-dom';
import { useSpotifyAuth } from '../hooks/useSpotifyAuth';

const Dashboard = () => {
  const { clearToken } = useSpotifyAuth();
  
  return (
    <div>
      Dashboard
      <Link to='/'>
        <button onClick={clearToken} className='border border-black p-2'>Logout</button>
      </Link>
    </div>
  );
};

export default Dashboard;
