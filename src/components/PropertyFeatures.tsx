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
        ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)]' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-4 md:p-6 shadow-xl`}>
      {/* Feature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        {features.map((feature, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)]' 
              : 'bg-white/40 backdrop-blur-md border-purple-200/40'
          } rounded-xl border p-3 md:p-4 text-center transition-all duration-300`}>
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
              ? 'bg-white/10 text-white/90 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.02),_-1px_-1px_8px_rgba(255,255,255,0.06),_3px_3px_10px_rgba(0,0,0,0.4),_inset_1px_1px_1px_rgba(255,255,255,0.03)]'
              : 'bg-white/40 text-purple-900 border-purple-200/40'
          } px-3 py-1 rounded-full text-sm border backdrop-blur-md transition-all duration-300`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
