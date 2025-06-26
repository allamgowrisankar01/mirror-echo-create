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
      <h3 className="text-lg font-semibold text-white mb-4">
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
            <div className="font-semibold text-white">
              Rajesh Kumar
            </div>
            <div className="text-sm text-white/80">
              Property Owner
            </div>
            <div className="text-xs text-white/60">
              Responds in 2 hours
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <Button className={`flex-1 md:flex-initial ${
            isDarkMode 
              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600' 
              : 'bg-gradient-to-r from-purple-500 to-fuchsia-500'
          } text-white rounded-full px-6 py-2 shadow-lg`}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button className={`flex-1 md:flex-initial ${
            isDarkMode 
              ? 'bg-gray-950/30 text-white border-white/5' 
              : 'bg-white/20 text-white border-purple-300/20'
          } rounded-full px-6 py-2 border backdrop-blur-md shadow-lg`}>
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactOwner;
