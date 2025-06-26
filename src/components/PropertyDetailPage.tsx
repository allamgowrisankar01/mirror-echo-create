import { useState } from "react";
import { Heart, Search, User, MapPin, Phone, MessageCircle, Flag, AlertTriangle, CheckCircle, Menu } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Header */}
      <header className={`${
        isDarkMode 
          ? 'bg-gray-950/50 backdrop-blur-md border-white/5' 
          : 'bg-gray-900/40 backdrop-blur-md border-purple-300/20'
      } border-b sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center space-x-4">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent font-montserrat">
                RentoMate
              </h1>
            </div>

            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className={`relative ${
                isDarkMode 
                  ? 'bg-gray-950/40 border-white/10' 
                  : 'bg-white/20 border-purple-300/30'
              } rounded-full border`}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-12 pr-4 py-3 bg-transparent font-roboto text-white placeholder-white/70 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button className={`hidden md:flex ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-600' 
                  : 'bg-gradient-to-r from-purple-500 to-fuchsia-500'
              } text-white rounded-full px-6 py-2 shadow-lg font-montserrat`}>
                Host your property
              </Button>
              <div className={`${
                isDarkMode ? 'bg-gray-950/40' : 'bg-white/20'
              } p-2 rounded-full`}>
                <User className="w-6 h-6 text-white" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <div className={`relative ${
                isDarkMode 
                  ? 'bg-white/10 backdrop-blur-md border-white/20' 
                  : 'bg-white/40 backdrop-blur-md border-purple-200/40'
              } rounded-full border`}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-white/70 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400/50"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {/* <span className="text-sm text-white/70">
                    {isDarkMode ? 'Dark' : 'Light'}
                  </span>
                  <Switch
                    checked={!isDarkMode}
                    onCheckedChange={(checked) => setIsDarkMode(!checked)}
                    className="data-[state=checked]:bg-pink-500"
                  /> */}
                </div>
                <Button className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500'
                } text-white rounded-full px-4 py-2 text-sm shadow-lg`}>
                  Host your property
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8 space-y-6 md:space-y-8">
        {/* Property Gallery */}
        <PropertyGallery isDarkMode={isDarkMode} />

        {/* Property Title & Pricing */}
        <div className={`${
          isDarkMode 
            ? 'bg-gray-950/40 backdrop-blur-md border-white/5' 
            : 'bg-gray-900/30 backdrop-blur-md border-purple-300/20'
        } rounded-2xl border p-4 md:p-6 shadow-lg`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-montserrat">
                Luxury 2BHK Apartment in Lodha Park
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-roboto">
                  Lower Parel, Mumbai, Maharashtra
                </span>
              </div>
              <div className="text-sm text-white/80 mb-2 font-roboto">
                Lodha Park Tower A, Floor 15
              </div>
            </div>
            <div className="md:text-right">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-montserrat">
                ₹65,000
                <span className="text-lg font-normal text-white/80 font-roboto">
                  /month
                </span>
              </div>
              <div className="text-sm text-white/70 font-roboto">
                Maintenance: ₹5,000/month<br />
                Brokerage: Zero brokerage
              </div>
            </div>
          </div>
        </div>

        {/* Property Features */}
        <PropertyFeatures isDarkMode={isDarkMode} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Move-in Details */}
          <div className={`${
            isDarkMode 
              ? 'bg-gray-950/40 backdrop-blur-md border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.03)]' 
              : 'bg-gray-900/30 backdrop-blur-md border-purple-200/20 shadow-lg'
          } rounded-2xl border p-4 md:p-6`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-pink-400' : 'bg-purple-500'
              }`} />
              <h3 className="text-lg font-semibold text-white">
                Move-in Details
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Available:</span>
                <span className="font-medium text-white">Immediate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Furnishing:</span>
                <span className="font-medium text-white">Fully Furnished</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Preferred Tenants:</span>
                <span className="font-medium text-white">Family/Bachelor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Posted On:</span>
                <span className="font-medium text-white">Dec 20, 2024</span>
              </div>
            </div>
          </div>

          {/* Additional Charges */}
          <div className={`${
            isDarkMode 
              ? 'bg-gray-950/40 backdrop-blur-md border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.03)]' 
              : 'bg-gray-900/30 backdrop-blur-md border-purple-200/20 shadow-lg'
          } rounded-2xl border p-4 md:p-6`}>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${
                isDarkMode ? 'bg-pink-400' : 'bg-purple-500'
              }`} />
              <h3 className="text-lg font-semibold text-white">
                Additional Charges
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Electricity:</span>
                <div className="text-right">
                  <span className="font-medium text-white">₹8/unit</span>
                  <div className="text-xs text-white/50">variable</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Water:</span>
                <div className="text-right">
                  <span className="font-medium text-white">₹500</span>
                  <div className="text-xs text-white/50">monthly</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Maintenance:</span>
                <div className="text-right">
                  <span className="font-medium text-white">₹3,500</span>
                  <div className="text-xs text-white/50">monthly</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Security Deposit:</span>
                <div className="text-right">
                  <span className="font-medium text-white">₹90,000</span>
                  <div className="text-xs text-white/50">refundable</div>
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
            ? 'bg-gray-950/40 backdrop-blur-md border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.03)]' 
            : 'bg-gray-900/30 backdrop-blur-md border-purple-200/20 shadow-lg'
        } rounded-2xl border p-4 md:p-6`}>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white' 
                : 'border-purple-200 text-white'
            } rounded-full px-4 md:px-6 py-2 text-sm md:text-base`}>
              <Flag className="w-4 h-4 mr-2" />
              Report Property
            </Button>
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white' 
                : 'border-purple-200 text-white'
            } rounded-full px-4 md:px-6 py-2 text-sm md:text-base`}>
              <AlertTriangle className="w-4 h-4 mr-2" />
              Wrong Info
            </Button>
            <Button variant="outline" className={`${
              isDarkMode 
                ? 'border-white/30 text-white' 
                : 'border-purple-200 text-white'
            } rounded-full px-4 md:px-6 py-2 text-sm md:text-base`}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark as Rented
            </Button>
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <footer className={`${
        isDarkMode 
          ? 'bg-gray-950/50' 
          : 'bg-gray-900/40'
      } py-4 mt-8 md:mt-16 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-end">
          <span className="text-white/70 text-sm font-roboto">Edit with Lovable</span>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetailPage;
