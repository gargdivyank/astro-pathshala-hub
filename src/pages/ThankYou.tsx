import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star, Sparkles } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{
      background: "linear-gradient(to bottom, #1A0823 0%, #50046E 100%)"
    }}>
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-cosmic-gold/5 rounded-3xl blur-3xl"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cosmic-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cosmic-purple/30 rounded-full animate-pulse delay-1000"></div>
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-md w-full text-center border border-cosmic-gold/30 shadow-cosmic-glow">
          {/* Success icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CheckCircle className="w-12 h-12 text-cosmic-gold animate-bounce" />
              <Sparkles className="absolute -top-1.5 -right-1.5 w-4 h-4 text-cosmic-purple animate-spin" />
              <Star className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-cosmic-gold animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-cosmic-purple-dark mb-4">
            Thank You! 🎉
          </h1>
          
          <div className="space-y-2 mb-6">
            <p className="text-lg text-cosmic-purple font-semibold">
              Your Registration has been Successful!
            </p>
            <p className="text-base text-cosmic-purple/80">
              for the Scientific Kundli Analysis Webinar
            </p>
            <div className="bg-cosmic-gold/10 rounded-lg p-2 border border-cosmic-gold/20">
              <p className="text-cosmic-purple-dark font-medium text-sm">
                ✨ You'll receive the Zoom link via email soon ✨
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate("/")} 
            variant="cosmic" 
            size="lg" 
            className="w-full text-base font-semibold py-3 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Button>
          
          <p className="text-xs text-cosmic-purple/60 mt-4">
            Check your email for further instructions
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ThankYou; 