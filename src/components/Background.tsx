import { useLottie } from 'lottie-react';
import animationData from '../../Big-waves.json';

interface BackgroundProps {
  className?: string;
}

const Background = ({ className }: BackgroundProps) => {
  return (
    <div 
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none ${className || ''}`}
      style={{
        zIndex: -1,
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/purple-waves-bg.png)',
          transform: 'scale(1.1)', // Slight scale to prevent white edges during animation
        }}
      />
      <div 
        className="absolute inset-0 backdrop-blur-[20px] bg-black/30"
        style={{ 
          zIndex: 1,
          mixBlendMode: 'overlay'
        }}
      />
      <div 
        className="absolute inset-0 backdrop-blur-[15px] bg-purple-950/40"
        style={{ 
          zIndex: 2,
          mixBlendMode: 'soft-light'
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40"
        style={{ zIndex: 3 }}
      />
    </div>
  );
};

export default Background; 