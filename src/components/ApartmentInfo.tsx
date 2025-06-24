
import { MapPin, Home, Star } from 'lucide-react';

const ApartmentInfo = () => {
  return (
    <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-white leading-tight">Luxury 2BHK Apartment in Lodha Park</h2>
            <div className="flex items-center space-x-1 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">4.8</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm mb-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <Home className="w-4 h-4 text-pink-400" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold text-white">₹65,000</span>
          <span className="text-gray-400 text-base">/month</span>
          <div className="ml-auto bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/30">
            Zero Brokerage
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm p-3 bg-white/5 rounded-xl border border-white/10">
          <span className="text-gray-300">Maintenance: </span>
          <span className="text-white font-semibold">₹3,300/month</span>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Type</span>
              <span className="font-semibold text-white">2BHK</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Area</span>
              <span className="font-semibold text-white">1300 sq.ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Bathrooms</span>
              <span className="font-semibold text-white">2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Furnishing</span>
              <span className="font-semibold text-white">Fully Furnished</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Occupancy</span>
              <span className="font-semibold text-green-400">Ready to Move</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Parking</span>
              <span className="font-semibold text-white">1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
