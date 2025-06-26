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
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5' 
        : 'bg-gray-50/20 backdrop-blur-md border-purple-300/20'
    } rounded-2xl border p-6 shadow-lg`}>
      <h3 className="text-lg font-semibold font-montserrat text-white mb-4">
        Premium Amenities
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-gray-950/30 backdrop-blur-md border-white/5' 
              : 'bg-white/20 backdrop-blur-md border-purple-300/20'
          } rounded-xl border p-4 text-center`}>
            <div className={`${
              isDarkMode 
                ? 'bg-violet-500/10 text-white border border-white/20' 
                : 'bg-purple-500/10 text-white border border-white/20'
            } mb-3 mx-auto w-12 h-12 rounded-full flex items-center justify-center shadow-sm`}>
              <amenity.icon className="w-5 h-5" />
            </div>
            <div className="text-sm font-medium font-roboto text-white">
              {amenity.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;
