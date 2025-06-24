
import { Home } from 'lucide-react';

const SimilarProperties = () => {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      title: 'Premium 2BHK in Worli',
      location: 'Worli, Mumbai',
      details: '2 BHK • 1200 sq.ft',
      status: 'Fully Furnished',
      price: '₹72,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      title: 'Modern 3BHK in Bandra',
      location: 'Bandra West, Mumbai',
      details: '3 BHK • 1800 sq.ft',
      status: 'Semi Furnished',
      price: '₹95,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop',
      title: 'Luxury 2BHK in Andheri',
      location: 'Andheri East, Mumbai',
      details: '2 BHK • 1100 sq.ft',
      status: 'Fully Furnished',
      price: '₹58,000'
    }
  ];

  return (
    <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-5 border border-white/10 shadow-2xl">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
        <Home className="w-5 h-5 text-pink-400" />
        <span>Similar Properties You Might Like</span>
      </h3>
      
      <div className="text-sm text-gray-400 mb-4">
        Neighborhood recommendations based on your preferences
      </div>
      
      <div className="space-y-3">
        {properties.map((property, index) => (
          <div 
            key={index}
            className="flex space-x-4 p-4 rounded-xl backdrop-blur-xl bg-black/20 border border-white/10 hover:bg-black/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <img 
              src={property.image} 
              alt={property.title}
              className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white truncate text-sm">{property.title}</h4>
              <p className="text-xs text-gray-400">{property.location}</p>
              <p className="text-xs text-gray-500">{property.details}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded backdrop-blur-xl border border-green-500/20">
                  {property.status}
                </span>
                <span className="font-bold text-white text-sm">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 rounded-xl backdrop-blur-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 font-medium hover:bg-pink-500/20 hover:border-pink-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 text-sm">
        View Details
      </button>
    </div>
  );
};

export default SimilarProperties;
