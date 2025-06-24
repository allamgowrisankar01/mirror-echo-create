
import { Image as ImageIcon, Play } from 'lucide-react';

const ImageGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-3 rounded-3xl overflow-hidden bg-white/5 p-4 border border-white/10 shadow-2xl backdrop-blur-xl">
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <img 
              src={image} 
              alt={`Apartment view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {index === 0 && (
              <button className="absolute bottom-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                <Play className="w-5 h-5 text-white" />
              </button>
            )}
            {index === 5 && (
              <div className="absolute inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center border border-white/20 rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">+9</div>
                  <div className="text-sm opacity-80">More Photos</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 text-pink-400 font-semibold hover:from-pink-500/20 hover:to-violet-500/20 hover:border-pink-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 backdrop-blur-xl">
        <div className="flex items-center justify-center space-x-3">
          <ImageIcon className="w-5 h-5" />
          <span>View All Photos</span>
        </div>
      </button>
    </div>
  );
};

export default ImageGallery;
