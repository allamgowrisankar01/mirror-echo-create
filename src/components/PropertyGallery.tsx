import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyGalleryProps {
  isDarkMode: boolean;
}

const PropertyGallery = ({ isDarkMode }: PropertyGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-72">
      {/* Main Image */}
      <div className="col-span-1 md:col-span-2 relative group rounded-2xl overflow-hidden h-72">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center"
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
          } text-white rounded-full px-3 md:px-4 py-2 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300`}>
            <Heart className="w-4 h-4 mr-1 md:mr-2" />
            <span className="hidden xs:inline">Shortlist</span>
          </Button>
        </div>
      </div>

      {/* Side Images Grid */}
      <div className="hidden md:grid col-span-2 grid-cols-2 gap-4 h-72">
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center"
            alt="Property view 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop&crop=center"
            alt="Property view 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&crop=center"
            alt="Property view 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop&crop=center"
            alt="Property view 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Button className={`${
              isDarkMode 
                ? 'bg-white/20 hover:bg-white/30 text-white' 
                : 'bg-white/80 hover:bg-white/90 text-purple-900'
            } backdrop-blur-md rounded-full px-4 md:px-6 py-2 text-sm md:text-base font-medium`}>
              View all photos
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile View Additional Images Carousel */}
      <div className="grid md:hidden grid-cols-3 gap-2 h-24">
        <div className="rounded-xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center"
            alt="Property view 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop&crop=center"
            alt="Property view 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop&crop=center"
            alt="Property view 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-sm font-medium">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
