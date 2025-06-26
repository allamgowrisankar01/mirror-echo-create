
import { useState } from "react";
import { Heart, Search, User, MapPin, Phone, MessageCircle, Flag, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import PropertyGallery from "./PropertyGallery";
import PropertyFeatures from "./PropertyFeatures";
import PropertyAmenities from "./PropertyAmenities";
import PropertyAbout from "./PropertyAbout";
import LocationMap from "./LocationMap";
import ContactOwner from "./ContactOwner";
import SimilarProperties from "./SimilarProperties";

const PropertyDetailPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#362c5d] via-[#4a3268] to-[#ff1c67]' 
        : 'bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100'
    }`}>
      {/* Header */}
      <header className={`${
        isDarkMode 
          ? 'bg-black/20 backdrop-blur-md border-white/10' 
          : 'bg-white/30 backdrop-blur-md border-purple-200/30'
      } border-b sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              RentoMate
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className={`relative ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-md border-white/20' 
                : 'bg-white/40 backdrop-blur-md border-purple-200/40'
            } rounded-full border`}>
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-white/70' : 'text-purple-600/70'
              } w-5 h-5`} />
              <input
                type="text"
                placeholder="Search destinations..."
                className={`w-full pl-12 pr-4 py-3 bg-transparent ${
                  isDarkMode ? 'text-white placeholder-white/70' 
                             : 'text-purple-900 placeholder-purple-600/70'
                } rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400/50`}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-purple-700'}`}>
                {isDarkMode ? 'Dark' : 'Light'}
              </span>
              <Switch
                checked={!isDarkMode}
                onCheckedChange={(checked) => setIsDarkMode(!checked)}
                className="data-[state=checked]:bg-pink-500"
              />
            </div>
            <Button className={`${
              isDarkMode 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            } text-white rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
              Host your property
            </Button>
            <div className={`${
              isDarkMode ? 'bg-white/10 backdrop-blur-md' : 'bg-white/40 backdrop-blur-md'
            } p-2 rounded-full`}>
              <User className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-purple-700'}`} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Property Gallery */}
        <PropertyGallery isDarkMode={isDarkMode} />

        {/* Property Title & Pricing */}
        <div className={`${
          isDarkMode 
            ? 'bg-white/10 backdrop-blur-md border-white/20' 
            : 'bg-white/50 backdrop-blur-md border-purple-200/50'
        } rounded-2xl border p-6 shadow-xl`}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className={`text-3xl font-bold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              } mb-2`}>
                Luxury 2BHK Apartment in Lodha Park
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className={`w-5 h-5 ${
                  isDarkMode ? 'text-pink-400' : 'text-purple-600'
                }`} />
                <span className={`${
                  isDarkMode ? 'text-white/80' : 'text-purple-700'
                }`}>
                  Lower Parel, Mumbai, Maharashtra
                </span>
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-white/60' : 'text-purple-600'
              } mb-2`}>
                Lodha Park Tower A, Floor 15
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              } mb-1`}>
                ₹65,000
                <span className={`text-lg font-normal ${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>
                  /month
                </span>
              </div>
              <div className={`text-sm ${
                isDarkMode ? 'text-white/60' : 'text-purple-600'
              }`}>
                Maintenance: ₹5,000/month<br />
                Brokerage: Zero brokerage
              </div>
            </div>
          </div>
        </div>

        {/* Property Features */}
        <PropertyFeatures isDarkMode={isDarkMode} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Move-in Details */}
          <div className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20' 
              : 'bg-white/50 backdrop-blur-md border-purple-200/50'
          } rounded-2xl border p-6 shadow-xl`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-pink-400' : 'bg-purple-500'
              }`} />
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              }`}>
                Move-in Details
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Available:</span>
                <span className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-purple-900'
                }`}>Immediate</span>
              </div>
              <div className="flex justify-between">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Furnishing:</span>
                <span className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-purple-900'
                }`}>Fully Furnished</span>
              </div>
              <div className="flex justify-between">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Preferred Tenants:</span>
                <span className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-purple-900'
                }`}>Family/Bachelor</span>
              </div>
              <div className="flex justify-between">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Posted On:</span>
                <span className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-purple-900'
                }`}>Dec 20, 2024</span>
              </div>
            </div>
          </div>

          {/* Additional Charges */}
          <div className={`${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-md border-white/20' 
              : 'bg-white/50 backdrop-blur-md border-purple-200/50'
          } rounded-2xl border p-6 shadow-xl`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-pink-400' : 'bg-purple-500'
              }`} />
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-purple-900'
              }`}>
                Additional Charges
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Electricity:</span>
                <div className="text-right">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-purple-900'
                  }`}>₹8/unit</span>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-white/50' : 'text-purple-600/70'
                  }`}>variable</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Water:</span>
                <div className="text-right">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-purple-900'
                  }`}>₹500</span>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-white/50' : 'text-purple-600/70'
                  }`}>monthly</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Maintenance:</span>
                <div className="text-right">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-purple-900'
                  }`}>₹3,500</span>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-white/50' : 'text-purple-600/70'
                  }`}>monthly</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${
                  isDarkMode ? 'text-white/70' : 'text-purple-700'
                }`}>Security Deposit:</span>
                <div className="text-right">
                  <span className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-purple-900'
                  }`}>₹90,000</span>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-white/50' : 'text-purple-600/70'
                  }`}>refundable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Amenities */}
        <PropertyAmenities isDarkMode={isDarkMode} />

        {/* About This Property */}
        <PropertyAbout isDarkMode={isDarkMode} />

        {/* Location Map */}
        <LocationMap isDarkMode={isDarkMode} />

        {/* Contact Owner */}
        <ContactOwner isDarkMode={isDarkMode} />

        {/* Report Buttons */}
        <div className={`${
          isDarkMode 
            ? 'bg-white/10 backdrop-blur-md border-white/20' 
            : 'bg-white/50 backdrop-blur-md border-purple-200/50'
        } rounded-2xl border p-6 shadow-xl`}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white/80 hover:bg-white/10' 
                : 'border-purple-200 text-purple-700 hover:bg-purple-100/50'
            } rounded-full px-6 py-2`}>
              <Flag className="w-4 h-4 mr-2" />
              Report Property
            </Button>
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white/80 hover:bg-white/10' 
                : 'border-purple-200 text-purple-700 hover:bg-purple-100/50'
            } rounded-full px-6 py-2`}>
              <AlertTriangle className="w-4 h-4 mr-2" />
              Wrong Info
            </Button>
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white/80 hover:bg-white/10' 
                : 'border-purple-200 text-purple-700 hover:bg-purple-100/50'
            } rounded-full px-6 py-2`}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Rented
            </Button>
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer className="bg-black py-4 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-end">
          <span className="text-white/70 text-sm">Edit with Lovable</span>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetailPage;
