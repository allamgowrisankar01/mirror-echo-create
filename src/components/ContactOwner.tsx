import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOwnerProps {
  isDarkMode: boolean;
}

const ContactOwner = ({ isDarkMode }: ContactOwnerProps) => {
  return (
    <div className={`${
      isDarkMode 
        ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)]' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-6 shadow-xl`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        Contact Property Owner
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5)]`}>
            RK
          </div>
          <div>
            <div className={`font-semibold ${
              isDarkMode ? 'text-white' : 'text-purple-900'
            }`}>
              Rajesh Kumar
            </div>
            <div className={`text-sm ${
              isDarkMode ? 'text-white/70' : 'text-purple-700'
            }`}>
              Property Owner
            </div>
            <div className={`text-xs ${
              isDarkMode ? 'text-white/60' : 'text-purple-600'
            }`}>
              Responds in 2 hours
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className={`${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5)]' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
          } text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button className={`${
            isDarkMode 
              ? 'bg-black/30 hover:bg-black/40 text-white border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5)]' 
              : 'bg-white/60 hover:bg-white/80 text-purple-900 border-purple-200/60'
          } rounded-full px-6 py-2 border backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300`}>
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactOwner;
