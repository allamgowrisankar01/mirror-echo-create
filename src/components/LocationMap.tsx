
import { MapPin } from "lucide-react";

interface LocationMapProps {
  isDarkMode: boolean;
}

const LocationMap = ({ isDarkMode }: LocationMapProps) => {
  return (
    <div className={`${
      isDarkMode 
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-6 shadow-xl`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        Location Map
      </h3>
      <div className={`${
        isDarkMode 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/30 border-purple-200/30'
      } rounded-xl border h-64 flex flex-col items-center justify-center`}>
        <div className={`${
          isDarkMode ? 'text-pink-400' : 'text-purple-600'
        } mb-4`}>
          <MapPin className="w-12 h-12" />
        </div>
        <p className={`${
          isDarkMode ? 'text-white/80' : 'text-purple-800'
        } text-center font-medium`}>
          Interactive map will be displayed here
        </p>
        <p className={`${
          isDarkMode ? 'text-white/60' : 'text-purple-600'
        } text-sm mt-2`}>
          Lower Parel, Mumbai
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
