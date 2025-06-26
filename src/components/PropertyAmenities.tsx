import { Wifi, ChefHat, Tv, Snowflake, Car, Coffee, Shield, Dumbbell } from "lucide-react";

interface PropertyAmenitiesProps {
  isDarkMode: boolean;
}

const PropertyAmenities = ({ isDarkMode }: PropertyAmenitiesProps) => {
  const amenities = [
    { icon: Wifi, label: "High Speed WiFi" },
    { icon: ChefHat, label: "Modular Kitchen" },
    { icon: Tv, label: '55" Smart TV' },
    { icon: Snowflake, label: "Central AC" },
    { icon: Car, label: "Covered Parking" },
    { icon: Coffee, label: "Coffee Machine" },
    { icon: Shield, label: "24/7 Security" },
    { icon: Dumbbell, label: "Gym & Pool" },
  ];

  return (
    <div className={`${
      isDarkMode 
        ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)]' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-6 shadow-xl`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        Premium Amenities
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)]' 
              : 'bg-white/40 backdrop-blur-md border-purple-200/40'
          } rounded-xl border p-4 text-center transition-all duration-300`}>
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
