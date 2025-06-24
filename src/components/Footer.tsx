
import { Home, Search, Heart, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-2 text-center max-w-md mx-auto">
        <button className="flex flex-col items-center space-y-2 text-pink-400 transition-all duration-300 py-2 px-3 rounded-2xl bg-pink-500/10 border border-pink-500/20">
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-2 px-3 rounded-2xl hover:bg-white/5">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-2 px-3 rounded-2xl hover:bg-white/5 relative">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Saved</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
        </button>
        <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-pink-400 transition-all duration-300 py-2 px-3 rounded-2xl hover:bg-white/5">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
