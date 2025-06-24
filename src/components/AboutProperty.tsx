
import { ChevronDown } from 'lucide-react';

const AboutProperty = () => {
  return (
    <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-5 border border-white/10 shadow-2xl">
      <h3 className="text-lg font-bold mb-4 text-white">About this property</h3>
      
      <div className="text-gray-300 text-sm leading-relaxed space-y-3">
        <p>
          Experience luxury living at its finest in Mumbai with this stunning residential apartment. 
          Located in the prime area of Lower Parel, this property offers stunning downtown views 
          and premium amenities that redefine modern living.
        </p>
        <p className="opacity-60">
          The apartment features state-of-the-art facilities, premium location access, and is perfect 
          for professionals seeking a sophisticated lifestyle in the heart of Mumbai's business district...
        </p>
      </div>
      
      <button className="mt-4 flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:shadow-lg hover:shadow-pink-500/20 p-3 rounded-lg backdrop-blur-xl bg-black/20 border border-white/10 w-full justify-center">
        <span className="font-medium text-sm">Read More</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AboutProperty;
