
import { Menu, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 shadow-2xl">
      <div className="flex items-center justify-between px-6 py-5 max-w-md mx-auto lg:max-w-2xl">
        <div className="flex items-center space-x-4">
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm">
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent tracking-wide">
            RentoMate
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 relative hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50 ring-2 ring-black"></div>
          </button>
          <button className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
