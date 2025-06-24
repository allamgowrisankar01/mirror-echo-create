
import { User, Phone, MessageCircle, Shield } from 'lucide-react';

const ContactOwner = () => {
  return (
    <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-6 text-white">Contact Property Owner</h3>
      
      <div className="flex items-center space-x-4 mb-6 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-pink-500/30 relative">
          <User className="w-7 h-7 text-white" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-white text-lg">Rajesh Kumar</div>
          <div className="text-sm text-gray-400 flex items-center space-x-2">
            <span>Property Owner</span>
            <Shield className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs">Verified</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Usually responds within 10 minutes</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="py-4 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Chat Now</span>
        </button>
        <button className="py-4 px-4 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 backdrop-blur-xl">
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
