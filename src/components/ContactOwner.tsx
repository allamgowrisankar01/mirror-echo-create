import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOwnerProps {
  isDarkMode: boolean;
}

const ContactOwner = ({ isDarkMode }: ContactOwnerProps) => {
  return (
    <div className={`${
      isDarkMode 
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5' 
        : 'bg-gray-50/20 backdrop-blur-md border-purple-300/20'
    } rounded-2xl border p-4 md:p-6 shadow-lg`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-violet-200' : 'text-purple-800'
      } mb-4`}>
        Contact Property Owner
      </h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600' 
              : 'bg-gradient-to-r from-purple-500 to-fuchsia-500'
          } rounded-full flex items-center justify-center text-white font-bold text-lg`}>
            RK
          </div>
          <div>
            <div className={`font-semibold ${
              isDarkMode ? 'text-violet-200' : 'text-purple-800'
            }`}>
              Rajesh Kumar
            </div>
            <div className={`text-sm ${
              isDarkMode ? 'text-violet-300/80' : 'text-purple-600'
            }`}>
              Property Owner
            </div>
            <div className={`text-xs ${
              isDarkMode ? 'text-violet-300/60' : 'text-purple-500'
            }`}>
              Responds in 2 hours
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Button className={`flex-1 md:flex-initial ${
            isDarkMode 
              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700' 
              : 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600'
          } text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button className={`flex-1 md:flex-initial ${
            isDarkMode 
              ? 'bg-gray-950/30 hover:bg-gray-950/40 text-violet-200 border-white/5' 
              : 'bg-white/20 hover:bg-white/30 text-purple-800 border-purple-300/20'
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
