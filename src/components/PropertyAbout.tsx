import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PropertyAboutProps {
  isDarkMode: boolean;
}

const PropertyAbout = ({ isDarkMode }: PropertyAboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Experience luxury living in the heart of Mumbai with this stunning downtown apartment. Located on the 15th floor of Lodha Park, this beautifully designed 2BHK space offers breathtaking city views and modern amenities.

The apartment features a spacious living area with floor-to-ceiling windows, a fully equipped modular kitchen with premium appliances, and two well-appointed bedrooms with attached bathrooms. The master bedroom includes a walk-in closet and a private balcony overlooking the cityscape.

Building amenities include 24/7 security, power backup, covered parking, gymnasium, swimming pool, and landscaped gardens. The location provides excellent connectivity to business districts, shopping centers, restaurants, and public transportation.

This is perfect for professionals, families, or anyone seeking a premium lifestyle in one of Mumbai's most sought-after neighborhoods.`;

  const shortText = fullText.substring(0, 300) + "...";

  return (
    <div className={`${
      isDarkMode 
        ? 'bg-gray-950/20 backdrop-blur-md border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.03)]' 
        : 'bg-gray-50/30 backdrop-blur-md border-purple-200/20 shadow-lg'
    } rounded-2xl border p-6`}>
      <h3 className={`text-lg font-semibold ${
        isDarkMode ? 'text-white' : 'text-purple-900'
      } mb-4`}>
        About this property
      </h3>
      <p className={`${
        isDarkMode ? 'text-white/80' : 'text-purple-800'
      } leading-relaxed mb-4`}>
        {isExpanded ? fullText : shortText}
      </p>
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isDarkMode 
            ? 'text-pink-400 hover:text-pink-300' 
            : 'text-purple-600 hover:text-purple-700'
        } p-0 h-auto font-medium`}
        variant="ghost"
      >
        {isExpanded ? "Read less" : "Read more"}
      </Button>
    </div>
  );
};

export default PropertyAbout;
