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
      <h3 className="text-lg font-semibold text-white mb-4">
        Location Map
      </h3>
      <div className={`${
        isDarkMode 
          ? 'bg-gray-950/30 border-white/5' 
          : 'bg-gray-50/40 border-purple-200/20'
      } rounded-xl border h-64 flex flex-col items-center justify-center`}>
        <div className="text-white mb-4">
          <MapPin className="w-12 h-12" />
        </div>
        <p className="text-white text-center font-medium">
          Interactive map will be displayed here
        </p>
        <p className="text-white/60 text-sm mt-2">
          Lower Parel, Mumbai
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
