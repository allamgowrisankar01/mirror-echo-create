
import { Calendar } from 'lucide-react';

const MoveInDetails = () => {
  return (
    <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-5 border border-white/10 shadow-2xl">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
        <Calendar className="w-5 h-5 text-pink-400" />
        <span>Move-in Details</span>
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Availability</span>
            <span className="font-semibold text-green-400">Immediate</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Building Type</span>
            <span className="font-semibold text-white">High-rise Tower</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Floor</span>
            <span className="font-semibold text-white">15th of 42</span>
          </div>
        </div>
        
        <div className="pt-3 border-t border-white/10">
          <div className="text-gray-400 mb-3 text-sm font-medium">Additional Charges:</div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Electricity</span>
              <span className="text-white">₹8/unit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Water</span>
              <span className="text-white">₹500/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Maintenance</span>
              <span className="text-white">₹3,300/month</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-white/10 pt-2 mt-2">
              <span className="text-gray-300">Security Deposit</span>
              <span className="text-white">₹90,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveInDetails;
