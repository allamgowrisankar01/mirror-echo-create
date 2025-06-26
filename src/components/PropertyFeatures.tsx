import { Home, Square, Bed, Users } from "lucide-react";

interface PropertyFeaturesProps {
  isDarkMode: boolean;
}

const PropertyFeatures = ({ isDarkMode }: PropertyFeaturesProps) => {
  const features = [
    { icon: Home, label: "Apartment Type", value: "2BHK" },
    { icon: Square, label: "Built-up Area", value: "1,250 sq ft" },
    { icon: Bed, label: "Bedrooms", value: "2 Bedrooms", subtext: "Attached + Common" },
    { icon: Users, label: "Max Occupancy", value: "4 People" },
  ];

  const tags = ["Fully Furnished", "Ready to Move", "East Facing", "High Floor"];

  return (
    <div className={`${
      isDarkMode 
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-4 md:p-6 shadow-xl`}>
      {/* Feature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        {features.map((feature, index) => (
          <div key={index} className={`${
            isDarkMode
              ? 'bg-white/10 backdrop-blur-md border-white/20' 
              : 'bg-white/40 backdrop-blur-md border-purple-200/40'
          } rounded-xl border p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300`}>
            <div className={`${
              isDarkMode ? 'text-pink-400' : 'text-purple-600'
            } mb-2 flex justify-center`}>
              <feature.icon className="w-5 md:w-6 h-5 md:h-6" />
            </div>
            <div className={`text-base md:text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-purple-900'
            } mb-1`}>
              {feature.value}
            </div>
            <div className={`text-xs ${
              isDarkMode ? 'text-white/70' : 'text-purple-700'
            }`}>
              {feature.label}
            </div>
            {feature.subtext && (
              <div className={`text-xs ${
                isDarkMode ? 'text-white/60' : 'text-purple-600'
              } mt-1`}>
                {feature.subtext}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className={`${
            isDarkMode 
              ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-300 border-pink-400/30' 
              : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border-purple-400/30'
          } px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border backdrop-blur-md`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
