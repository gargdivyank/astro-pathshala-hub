import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Heart, 
  Home, 
  Clock, 
  Target,
  Star,
  Lightbulb
} from "lucide-react";

const WhatYoullLearn = () => {
  const learningPoints = [
    {
      icon: Brain,
      title: "Scientific Kundali Reading",
      description: "Learn the authentic scientific approach to reading kundali charts with mathematical precision",
      highlight: "Core Foundation"
    },
    {
      icon: TrendingUp,
      title: "Career & Success Prediction",
      description: "Identify your true career path and timing for major professional decisions",
      highlight: "Career Focus"
    },
    {
      icon: Heart,
      title: "Health & Wellness Analysis",
      description: "Understand health patterns and preventive measures through planetary positions",
      highlight: "Health Insights"
    },
    {
      icon: Home,
      title: "Family & Relationship Harmony",
      description: "Resolve family conflicts and create peaceful relationships using kundali wisdom",
      highlight: "Peace at Home"
    },
    {
      icon: Clock,
      title: "Perfect Timing (Muhurat)",
      description: "Master the art of selecting auspicious timing for important life events",
      highlight: "Timing Mastery"
    },
    {
      icon: Target,
      title: "Life Purpose Discovery",
      description: "Uncover your soul's purpose and align your actions with cosmic energy",
      highlight: "Purpose Clarity"
    }
  ];

  const bonuses = [
    "Free Kundali Analysis Template",
    "Planetary Remedy Guidebook",
    "Life Event Timing Calculator",
    "Direct Q&A with Dr. Gunjan"
  ];

  return (
    <div className="relative bg-gradient-to-b from-cosmic-purple-dark to-cosmic-purple py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What You'll <span className="text-cosmic-gold">Master</span>
          </h2>
          <p className="text-xl text-cosmic-gold mb-6">
            Transform your life with scientific kundali analysis
          </p>
          <Badge variant="outline" className="border-cosmic-gold text-cosmic-gold text-lg px-6 py-2">
            ✨ 2 Hours of Intensive Training
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {learningPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-cosmic-gold/30 hover:border-cosmic-gold/60 transition-all duration-300 hover:shadow-cosmic-glow group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cosmic-gold/20 p-3 rounded-lg group-hover:bg-cosmic-gold/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-cosmic-gold" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 bg-cosmic-gold/20 text-cosmic-gold border-none">
                        {point.highlight}
                      </Badge>
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cosmic-gold transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-cosmic-gold/10 backdrop-blur-sm border-cosmic-gold/40 shadow-cosmic-glow">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-cosmic-gold animate-cosmic-pulse" />
                <h3 className="text-2xl font-bold text-cosmic-gold">Exclusive Bonuses</h3>
                <Star className="w-6 h-6 text-cosmic-gold animate-cosmic-pulse" />
              </div>
              <p className="text-white mb-6">
                Register today and get these valuable resources absolutely FREE!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                    <Lightbulb className="w-5 h-5 text-cosmic-gold flex-shrink-0" />
                    <span className="text-white font-medium">{bonus}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Badge className="bg-cosmic-gold text-cosmic-purple-dark font-bold text-lg px-6 py-2">
                  Total Value: ₹2,997 - Yours FREE!
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatYoullLearn;