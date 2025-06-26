
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyGalleryProps {
  isDarkMode: boolean;
}

const PropertyGallery = ({ isDarkMode }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 h-56">
      {/* Main Image */}
      <div className="col-span-2 relative group rounded-2xl overflow-hidden h-56">
        <img
          src="/placeholder.svg"
          alt="Main property view"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`${
            isDarkMode ? 'bg-black/50 text-white' : 'bg-white/80 text-purple-900'
          } px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md`}>
            5 photos
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <Button className={`${
            isDarkMode 
              ? 'bg-pink-500 hover:bg-pink-600' 
              : 'bg-purple-500 hover:bg-purple-600'
          } text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
            <Heart className="w-4 h-4 mr-2" />
            Shortlist
          </Button>
        </div>
      </div>

      {/* Side Images Grid */}
      <div className="col-span-2 grid grid-cols-2 gap-4 h-56">
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="/placeholder.svg"
            alt="Property view 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="/placeholder.svg"
            alt="Property view 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="/placeholder.svg"
            alt="Property view 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden h-full">
          <img
            src="/placeholder.svg"
            alt="Property view 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button className={`${
              isDarkMode 
                ? 'bg-white/20 hover:bg-white/30 text-white' 
                : 'bg-white/80 hover:bg-white/90 text-purple-900'
            } backdrop-blur-md rounded-full px-6 py-2 font-medium`}>
              View all photos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
