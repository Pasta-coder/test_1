import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Trophy, Star, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';

const HeroSection = () => {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-primary-foreground">
                #1 JEE Coaching Institute in Roorkee
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Shaping Future
              <span className="text-gradient-accent block">Engineers</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your journey to IIT starts here. Join the most trusted name for JEE Mains & Advanced preparation with proven results and expert faculty.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-primary-foreground/80">IIT Selections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-accent group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Achiever's Academy Classroom" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-primary rounded-lg p-2">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">99.87</div>
                  <div className="text-xs text-muted-foreground">JEE Mains 2024</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-medium">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary rounded-lg p-2">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">100+ Students</div>
                  <div className="text-xs text-muted-foreground">In IITS/NITS/BITS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;