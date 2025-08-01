import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, MapPin, Star } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import astro from "@/assets/astro_image.png";

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
                <img
                  src={logo}
                  alt="Brahmavastu Logo"
                  className="w-13 h-12 mr-2"
                  style={{ objectFit: "contain" }}
                />
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 ">
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
  {/* Date Card */}
  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-4 border border-cosmic-gold/30 hover:border-cosmic-gold/50 transition-all duration-300 group hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-cosmic-gold/10 rounded-lg group-hover:bg-cosmic-gold/20 transition-colors">
        <Calendar className="w-5 h-5 text-cosmic-gold" />
      </div>
      <p className="text-white text-sm font-medium">Date</p>
    </div>
    <p className="text-white text-base font-semibold mb-1">Thursday</p>
    <p className="text-cosmic-gold text-sm font-medium">31st July, 2025</p>
  </div>

  {/* Time Card */}
  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-4 border border-cosmic-gold/30 hover:border-cosmic-gold/50 transition-all duration-300 group hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-cosmic-gold/10 rounded-lg group-hover:bg-cosmic-gold/20 transition-colors">
        <Clock className="w-5 h-5 text-cosmic-gold" />
      </div>
      <p className="text-white text-sm font-medium">Time</p>
    </div>
    <p className="text-white text- font-semibold mb-1">06:00 - 08:00 PM</p>
    <p className="text-cosmic-gold text-sm font-medium">2 Hours Live Session</p>
  </div>

  {/* Platform Card */}
  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-4 border border-cosmic-gold/30 hover:border-cosmic-gold/50 transition-all duration-300 group hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-cosmic-gold/10 rounded-lg group-hover:bg-cosmic-gold/20 transition-colors">
        <Video className="w-5 h-5 text-cosmic-gold" />
      </div>
      <p className="text-white text-sm font-medium">Platform</p>
    </div>
    <p className="text-white text-base font-semibold mb-1">Zoom Meeting</p>
    <p className="text-cosmic-gold text-sm font-medium">Join from anywhere</p>
  </div>

  {/* Price Card */}
  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-4 border border-cosmic-gold/30 hover:border-cosmic-gold/50 transition-all duration-300 group hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-cosmic-gold/10 rounded-lg group-hover:bg-cosmic-gold/20 transition-colors">
        <Star className="w-5 h-5 text-cosmic-gold" />
      </div>
      <p className="text-white text-sm font-medium">Price</p>
    </div>
    <div className="flex items-end gap-2">
      <p className="text-white/60 text-sm line-through">₹49</p>
      <p className="text-cosmic-gold text-base font-bold">FREE</p>
    </div>
    <p className="text-white/80 text-xs mt-1">Limited time offer</p>
  </div>
</div>

            {/* CTA Button */}
            <div className="mb-6">
              <Button
                variant="cosmic-gold"
                size="xl"
                className="w-full lg:w-auto animate-cosmic-glow"
                onClick={() => {
                  const target = document.getElementById('registration');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                JOIN US
              </Button>
            </div>

            {/* Registration Note
            <div className="flex items-center justify-center lg:justify-start gap-2 text-cosmic-gold">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">Tap the link in bio to register!</p>
            </div> */}
          </div>

          {/* Right Content - Expert Photo */}
        {/* Right Content - Astro Arun Pandit Design */}
<div className="flex-1 flex flex-col items-center justify-center">
  {/* Circular Image with Gold Border */}
  <div className="relative flex flex-col items-center">
    <div
      className="w-96 h-96 rounded-full border-8 border-[#CBB26A] bg-[#14192F] flex items-center justify-center overflow-hidden shadow-xl"
      style={{ boxShadow: "0 0 0 12px #14192F, 0 0 0 18px #CBB26A" }}
    >
      <img
        src={astro}
        alt="Astro Arun Pandit"
        className="w-full h-full object-cover rounded-full"
        style={{ objectPosition: "45% 5%" }}
      />
    </div>
    {/* Text Card Below the Image */}
    <div className="mt-[-40px] bg-white rounded-xl shadow-lg px-8 py-6 w-[400px] text-center relative z-10">
      <h3 className="text-2xl font-bold text-neutral-800 mb-1">DR.GUNJAN AGARWAL </h3>
      <p className="text-gray-700 text-lg font-medium">
        A LIFE COACH
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;