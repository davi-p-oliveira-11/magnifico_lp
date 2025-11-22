import CTASection from "@/sections/CTASection/CTASection";
import FeaturesOne from "@/sections/FeaturesOne/FeaturesOne";
import FeaturesTwo from "@/sections/FeaturesTwo/FeaturesTwo";
import Footer from "@/sections/Footer/Footer";
import HeroSection from "@/sections/HeroSection/HeroSection";
import Navbar from "@/sections/Navbar/Navbar";
import ShowCaseOne from "@/sections/ShowCaseOne/ShowCaseOne";
import ShowCaseTwo from "@/sections/ShowCaseTwo/ShowCaseTwo";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="section-base section-light"> 
        <div className="section-container">
          <HeroSection />
        </div>  
      </section>
      
      <FeaturesOne />
      <FeaturesTwo />

      <ShowCaseOne />

      <ShowCaseTwo />

      <CTASection />

      <Footer />
    </>
  );
}
