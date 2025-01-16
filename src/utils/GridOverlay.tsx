import { useWindowSize } from '../hooks/useWindowSize';

const GridOverlay = () => {
  const { width, height } = useWindowSize();

  const columns = width ? Math.floor(width / 80) : 0;
  const rows = height ? Math.floor(height / 80) : 0;
  
  return (
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
          className='border border-borderClr'
          style={{
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default GridOverlay;