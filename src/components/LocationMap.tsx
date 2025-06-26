import { MapPin } from "lucide-react";

interface LocationMapProps {
  isDarkMode: boolean;
}

const LocationMap = ({ isDarkMode }: LocationMapProps) => {
  return (
    <div className={`${
      isDarkMode 
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5' 
        : 'bg-gray-50/30 backdrop-blur-md border-purple-200/20'
    } rounded-2xl border p-6 shadow-lg`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        Location Map
      </h3>
      <div className={`${
        isDarkMode 
          ? 'bg-gray-950/30 border-white/5' 
          : 'bg-gray-50/40 border-purple-200/20'
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
