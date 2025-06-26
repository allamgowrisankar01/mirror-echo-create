import { Button } from "@/components/ui/button";

interface SimilarPropertiesProps {
  isDarkMode: boolean;
}

const SimilarProperties = ({ isDarkMode }: SimilarPropertiesProps) => {
  const properties = [
    {
      title: "Premium 2BHK in Worli",
      rent: "₹72,000",
      area: "1,180 sq ft",
      image: "/placeholder.svg"
    },
    {
      title: "Modern 3BHK in Bandra",
      rent: "₹95,000",
      area: "1,400 sq ft",
      image: "/placeholder.svg"
    },
    {
      title: "Cozy 1BHK in Andheri",
      rent: "₹45,000",
      area: "650 sq ft",
      image: "/placeholder.svg"
    },
    {
      title: "Luxury 3BHK in Powai",
      rent: "₹85,000",
      area: "1,600 sq ft",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className={`${
      isDarkMode 
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5' 
        : 'bg-gray-50/20 backdrop-blur-md border-purple-300/20'
    } rounded-2xl border p-6 shadow-lg`}>
      <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-violet-200' : 'text-purple-800'} mb-4`}>
          Similar Properties
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-gray-950/30 backdrop-blur-md border-white/5 hover:bg-gray-950/40' 
              : 'bg-white/20 backdrop-blur-md border-purple-300/20 hover:bg-white/30'
          } rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg`}>
            <div className="aspect-video relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`${
                  isDarkMode 
                    ? 'bg-emerald-500/80' 
                    : 'bg-emerald-500/90'
                } text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm`}>
                  Zero Brokerage
                </span>
              </div>
            </div>
            
            <div className={`p-4 space-y-3 ${
              isDarkMode 
                ? 'bg-gray-950/20' 
                : 'bg-white/10'
            }`}>
              <h3 className={`font-semibold ${
                isDarkMode ? 'text-violet-200' : 'text-purple-800'
              }`}>
                {property.title}
              </h3>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-violet-400' : 'text-purple-600'
              }`}>
                {property.rent}
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-violet-300/80' : 'text-purple-600'
              }`}>
                {property.area}
              </div>
              
              <Button className={`w-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700 text-white' 
                  : 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white'
              } backdrop-blur-md rounded-full py-2 font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}>
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
