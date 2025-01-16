import { useWindowSize } from '../utils/useWindowSize';
import Button from '../components/ui/Button';
import { redirectToSpotify } from '../utils/redirectToSpotify';

const Login = () => {
  const { width, height } = useWindowSize();

  const columns = width ? Math.floor(width / 80) : 0;
  const rows = height ? Math.floor(height / 80) : 0;

  return (
    <div className='relative h-screen bg-gradient-to-r from-bgBackground to-bgForeground'>
      <div
        className='absolute inset-0 opacity-10'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, index) => (
          <div
            key={index}
            className='border border-white'
            style={{
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className='flex flex-col justify-center relative z-30 px-10 items-center h-full text-center text-textColor'>
        <h1 className='text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-textColor to-textColorLightest'>
  Discover the World of Music
        </h1>
        <p className='text-lg mb-6'>Login with Spotify to explore personalized music</p>
        <Button
          type='button'
          onClick={redirectToSpotify}
          className='bg-primary text-white font-bold px-6 py-3 rounded-lg'
        >
          Login with Spotify
        </Button>
      </div>
    </div>
  );
};

export default Login;
