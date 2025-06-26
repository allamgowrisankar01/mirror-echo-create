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
        ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)]' 
        : 'bg-white/50 backdrop-blur-md border-purple-200/50 shadow-xl'
    } rounded-2xl border p-6`}>
      <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-purple-900'} mb-4`}>
        Similar Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
          <div key={index} className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03),_-2px_-2px_10px_rgba(255,255,255,0.07),_5px_5px_15px_rgba(0,0,0,0.5),_inset_1px_1px_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05),_-3px_-3px_15px_rgba(255,255,255,0.1),_8px_8px_20px_rgba(0,0,0,0.6),_inset_1px_1px_1px_rgba(255,255,255,0.05)]' 
              : 'bg-white/50 backdrop-blur-md border-purple-200/50 shadow-lg hover:shadow-xl'
          } rounded-2xl border transition-all duration-300 overflow-hidden`}>
            <div className="aspect-video relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Zero Brokerage
                </span>
              </div>
            </div>
            
            <div className={`p-4 space-y-3 ${
              isDarkMode 
                ? 'bg-gradient-to-b from-white/[0.03] to-transparent' 
                : 'bg-white/30'
            }`}>
              <h3 className={`font-semibold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              }`}>
                {property.title}
              </h3>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-pink-400' : 'text-purple-600'
              }`}>
                {property.rent}
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-white/70' : 'text-purple-700'
              }`}>
                {property.area}
              </div>
              
              <Button className={`w-full ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.1)]' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg'
              } backdrop-blur-md rounded-full py-2 font-medium transition-all duration-300 hover:shadow-xl`}>
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
