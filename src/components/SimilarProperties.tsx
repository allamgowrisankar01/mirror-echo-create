
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
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50'
    } rounded-2xl border p-6 shadow-xl`}>
      <div className="text-center mb-6">
        <h2 className={`text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-purple-900'
        } mb-2`}>
          Similar Properties
        </h2>
        <p className={`${
          isDarkMode ? 'text-white/70' : 'text-purple-700'
        }`}>
          Handpicked recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20' 
              : 'bg-white/40 backdrop-blur-md border-purple-200/40'
          } rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Zero Brokerage
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className={`font-semibold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              } mb-2`}>
                {property.title}
              </h3>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-pink-400' : 'text-purple-600'
              } mb-1`}>
                {property.rent}
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-white/70' : 'text-purple-700'
              } mb-4`}>
                {property.area}
              </div>
              
              <Button className={`w-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:from-pink-500/30 hover:to-purple-600/30 text-pink-300 border-pink-400/30' 
                  : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 border-purple-400/30'
              } backdrop-blur-md border rounded-lg py-2 font-medium transition-all duration-300 shadow-inner hover:shadow-lg`}>
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
