import { motion, useMotionValue, animate, useMotionTemplate } from 'motion/react';
import { useEffect } from 'react';

import GridOverlay from '../utils/GridOverlay';
import Content from '../components/login/Content';

const COLORS_TOP = ['#500fb9', '#b90fb1', '#1e40af', '#b91c1c'];

const Login = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(175% 175% at 50% 0%, #020617 50%, ${color})`;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundImage: backgroundImage,
      }}
      className='relative h-screen bg-gradient-to-r from-bgBackground to-bgForeground'
    >
      <GridOverlay />
      <Content />
    </motion.div>
  );
};

export default Login;
