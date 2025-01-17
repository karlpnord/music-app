import { AiFillSpotify } from 'react-icons/ai';
import { redirectToSpotify } from '../../utils/redirectToSpotify';
import { motion } from 'motion/react';
import Button from '../ui/Button';

const Content = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col gap-2 justify-center mx-auto max-w-[400px] relative z-30 px-4 items-center h-full text-center text-textColor sm:max-w-[620px]'
    >
      <h1 className='text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-br from-textColor from-10% to-textColorLightest sm:text-7xl'>
        Discover the World of Music
      </h1>
      <p className='text-textColorLightest'>
        Login with Spotify to discover personalized music recommendations, explore curated playlists, and dive into an experience tailored to your unique taste in music.
      </p>
      <Button
        type='button'
        onClick={redirectToSpotify}
        className='flex items-center gap-2 bg-gradient-to-r from-primary to-secondary mt-6 sm:mt-8 relative text-primaryContent font-poppins font-semibold px-6 py-3 rounded-3xl'
      >
        <AiFillSpotify size={22} />
        Login with Spotify
        <span className='pointer-events-none absolute -inset-1 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-secondary to-primary opacity-30 blur-md' />
      </Button>
    </motion.div>
  );
};

export default Content;