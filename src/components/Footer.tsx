import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Gift, Zap } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative bg-cosmic-purple py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Final CTA Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Don't Miss This <span className="text-cosmic-gold">Life-Changing</span> Opportunity
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join Dr. Gunjan Agarwal and thousands of others in discovering the scientific secrets of kundali analysis
          </p>
        </div>

        {/* Urgency Indicators */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/30">
            <Clock className="w-6 h-6 text-cosmic-gold mx-auto mb-2" />
            <p className="text-white font-semibold">Limited Time</p>
            <p className="text-cosmic-gold text-sm">Free Access</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/30">
            <Users className="w-6 h-6 text-cosmic-gold mx-auto mb-2" />
            <p className="text-white font-semibold">847+ Registered</p>
            <p className="text-cosmic-gold text-sm">Join the Community</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/30">
            <Gift className="w-6 h-6 text-cosmic-gold mx-auto mb-2" />
            <p className="text-white font-semibold">₹2,997 Worth</p>
            <p className="text-cosmic-gold text-sm">Free Bonuses</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cosmic-gold/30">
            <Zap className="w-6 h-6 text-cosmic-gold mx-auto mb-2" />
            <p className="text-white font-semibold">Instant Access</p>
            <p className="text-cosmic-gold text-sm">Start Today</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-8">
          <Button variant="cosmic-gold" size="xl" className="animate-cosmic-glow mb-4"
            onClick={() => {
              const target = document.getElementById('registration');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            SECURE MY FREE SPOT NOW
          </Button>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-green-600 text-white">
              ✓ 100% Free
            </Badge>
            <Badge className="bg-blue-600 text-white">
              ✓ Instant Registration
            </Badge>
            <Badge className="bg-purple-600 text-white">
              ✓ Live Session
            </Badge>
          </div>
        </div>

        {/* Event Reminder */}
        <div className="bg-cosmic-gold/10 backdrop-blur-sm rounded-xl p-6 border border-cosmic-gold/30 mb-8">
          <h3 className="text-cosmic-gold text-lg font-bold mb-2">🗓️ Mark Your Calendar</h3>
          <p className="text-white text-lg">
            <strong>Thursday, July 31st, 2025 | 6:00 PM - 8:00 PM IST</strong>
          </p>
          <p className="text-white/80 text-sm mt-2">
            Zoom link will be sent to your registered email 1 hour before the session
          </p>
        </div>

        {/* Contact & Social */}
        {/* <div className="border-t border-cosmic-gold/30 pt-8">
          <div className="mb-4">
            <h4 className="text-cosmic-gold font-bold text-lg mb-2">Connect with Dr. Gunjan Agarwal</h4>
            <p className="text-white/80">@brahmavastu.g1</p>
          </div>
          
          <p className="text-white/60 text-sm">
            © 2025 Scientific Kundali Analysis Masterclass. All rights reserved.
          </p>
          <p className="text-cosmic-gold text-xs mt-2">
            Transform your life through ancient wisdom and modern science
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;