
import { Star } from 'lucide-react';

const PremiumAmenities = () => {
  const amenities = [
    { icon: '📶', name: 'High-speed WiFi', featured: true },
    { icon: '📺', name: '55" Smart TV', featured: true },
    { icon: '🚗', name: 'Covered Parking', featured: false },
    { icon: '🍳', name: 'Modular Kitchen', featured: true },
    { icon: '❄️', name: 'Central AC', featured: true },
    { icon: '☕', name: 'Coffee Machine', featured: false },
    { icon: '🔒', name: '24/7 Security', featured: true },
    { icon: '🏊', name: 'Gym & Pool', featured: true }
  ];

  return (
    <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-6 flex items-center space-x-3 text-white">
        <div className="p-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl border border-pink-500/30">
          <Star className="w-5 h-5 text-pink-400" />
        </div>
        <span>Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
              amenity.featured 
                ? 'bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 hover:from-pink-500/20 hover:to-violet-500/20' 
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            <div className="text-2xl">{amenity.icon}</div>
            <span className="text-sm font-medium text-white truncate">{amenity.name}</span>
            {amenity.featured && (
              <div className="ml-auto w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
