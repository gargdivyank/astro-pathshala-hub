import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, MapPin, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-cosmic-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cosmic-gold/20 rounded-full animate-cosmic-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cosmic-gold/30 rounded-full animate-cosmic-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cosmic-gold/25 rounded-full animate-cosmic-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cosmic-gold/15 rounded-full animate-cosmic-float delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Brand Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-cosmic-gold/30">
                <h2 className="text-cosmic-gold font-bold text-lg">@BRAHMAVASTU.G1</h2>
              </div>
            </div>

            {/* Main Headlines */}
            <div className="mb-8">
              <h3 className="text-cosmic-gold text-xl lg:text-2xl font-semibold mb-2 animate-cosmic-pulse">
                ONLINE MASTER CLASS
              </h3>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
                SCIENTIFIC{" "}
                <span className="relative">
                  <span className="text-cosmic-gold">🪐</span>
                  <br />
                  KUNDALI ANALYSIS
                </span>
              </h1>
            </div>

            {/* Problem Statement */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-cosmic-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-cosmic-gold text-lg lg:text-xl">
                  Struggling in Career, Health or Peace at Home?
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-white text-lg lg:text-xl">
                  Your manifestation starts at surrounding. Let's align it.
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/20">
                <Calendar className="w-6 h-6 text-cosmic-gold mb-2" />
                <p className="text-white text-sm font-semibold">Thursday</p>
                <p className="text-cosmic-gold text-xs">31st JULY, 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/20">
                <Clock className="w-6 h-6 text-cosmic-gold mb-2" />
                <p className="text-white text-sm font-semibold">06:00pm - 08:00pm</p>
                <p className="text-cosmic-gold text-xs">2 Hours Live</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/20">
                <Video className="w-6 h-6 text-cosmic-gold mb-2" />
                <p className="text-white text-sm font-semibold">Online Zoom Session</p>
                <p className="text-cosmic-gold text-xs">From Home</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/20">
                <Star className="w-6 h-6 text-cosmic-gold mb-2" />
                <p className="text-white text-sm font-semibold">Fee: ₹49</p>
                <p className="text-cosmic-gold text-xs font-bold">FREE</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <Button variant="cosmic-gold" size="xl" className="w-full lg:w-auto animate-cosmic-glow">
                JOIN US
              </Button>
            </div>

            {/* Registration Note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-cosmic-gold">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">Tap the link in bio to register!</p>
            </div>
          </div>

          {/* Right Content - Expert Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden bg-cosmic-card backdrop-blur-sm border border-cosmic-gold/30 shadow-cosmic-glow">
                <img
                  src="/lovable-uploads/508df760-b725-4617-a425-9ab8fde87065.png"
                  alt="Dr. Gunjan Agarwal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Expert Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-cosmic-gold/30">
                <h3 className="text-cosmic-purple-dark font-bold text-xl mb-1">
                  DR. GUNJAN AGARWAL
                </h3>
                <p className="text-cosmic-purple italic">A LIFE COACH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;