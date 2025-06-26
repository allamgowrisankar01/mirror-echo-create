
import { Wifi, ChefHat, Tv, Snowflake } from "lucide-react";

interface PropertyAmenitiesProps {
  isDarkMode: boolean;
}

const PropertyAmenities = ({ isDarkMode }: PropertyAmenitiesProps) => {
  const amenities = [
    { icon: Wifi, label: "High Speed WiFi" },
    { icon: ChefHat, label: "Modular Kitchen" },
    { icon: Tv, label: '55" Smart TV' },
    { icon: Snowflake, label: "Central AC" },
  ];

  return (
    <div className={`${
      isDarkMode 
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-6 shadow-xl`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        Premium Amenities
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20' 
              : 'bg-white/40 backdrop-blur-md border-purple-200/40'
          } rounded-xl border p-4 text-center hover:shadow-lg transition-all duration-300`}>
            <div className={`${
              isDarkMode ? 'text-pink-400' : 'text-purple-600'
            } mb-2 flex justify-center`}>
              <amenity.icon className="w-6 h-6" />
            </div>
            <div className={`text-sm font-medium ${
              isDarkMode ? 'text-white' : 'text-purple-900'
            }`}>
              {amenity.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;
