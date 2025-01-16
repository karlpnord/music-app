import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface Props extends HTMLMotionProps<'button'> {
  children: ReactNode;
  clickHandler?: () => void;
}

const Button = ({ children, className, clickHandler, ...rest }: Props) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{ duration: 0.3 }}
      onClick={clickHandler}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
