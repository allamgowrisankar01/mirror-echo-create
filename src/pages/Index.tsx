
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import ApartmentInfo from "../components/ApartmentInfo";
import MoveInDetails from "../components/MoveInDetails";
import AboutProperty from "../components/AboutProperty";
import PremiumAmenities from "../components/PremiumAmenities";
import ContactOwner from "../components/ContactOwner";
import SimilarProperties from "../components/SimilarProperties";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-x-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-pink-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-violet-500/5"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="pb-24 px-4 max-w-md mx-auto lg:max-w-2xl space-y-6">
          <ImageGallery />
          <div className="space-y-6">
            <ApartmentInfo />
            <div className="grid gap-6">
              <MoveInDetails />
              <AboutProperty />
            </div>
            <PremiumAmenities />
            <ContactOwner />
            <SimilarProperties />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
