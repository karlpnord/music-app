import { ReactNode, ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  clickHandler?: () => void;
}

const Button = ({ children, className, clickHandler, ...rest }: Props) => {
  return (
    <button onClick={clickHandler} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
