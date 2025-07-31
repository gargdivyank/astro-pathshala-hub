import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatYoullLearn />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
