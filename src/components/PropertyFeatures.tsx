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
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5' 
        : 'bg-gray-50/20 backdrop-blur-md border-purple-300/20'
    } rounded-2xl border p-4 md:p-6 shadow-lg`}>
      {/* Feature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        {features.map((feature, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-gray-950/30 backdrop-blur-md border-white/5' 
              : 'bg-white/20 backdrop-blur-md border-purple-300/20'
          } rounded-xl border p-3 md:p-4 text-center`}>
            <div className="text-white mb-2 flex justify-center">
              <feature.icon className="w-5 md:w-6 h-5 md:h-6" />
            </div>
            <div className="text-base md:text-lg font-bold text-white mb-1">
              {feature.value}
            </div>
            <div className="text-xs text-white/80">
              {feature.label}
            </div>
            {feature.subtext && (
              <div className="text-xs text-white/60 mt-1">
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
              ? 'bg-gray-950/30 text-white border-white/5' 
              : 'bg-white/20 text-white border-purple-300/20'
          } px-3 py-1 rounded-full text-sm border backdrop-blur-md`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;
