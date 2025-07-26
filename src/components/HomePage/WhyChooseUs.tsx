import { Users, BookOpen, Trophy, Target, Clock, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "IIT/IIM graduates with 10+ years of teaching experience and proven track record.",
      color: "bg-primary"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "5000+ IIT selections with consistent top ranks in JEE Mains & Advanced.",
      color: "bg-secondary"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Well-researched study materials, practice papers, and mock tests designed by experts.",
      color: "bg-accent"
    },
    {
      icon: Target,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual attention and doubt clearing sessions.",
      color: "bg-orange"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Multiple batch timings to accommodate school schedules and individual preferences.",
      color: "bg-primary"
    },
    {
      icon: Shield,
      title: "100% Success Guarantee",
      description: "Money-back guarantee if you don't qualify JEE Mains with our dedicated preparation.",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
            Why Choose SS Classes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just teach, we transform dreams into reality. Here's what makes us the preferred choice for JEE aspirants across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`${feature.color} rounded-2xl p-4 w-16 h-16 mx-auto mb-6 group-hover:shadow-glow transition-all duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-3xl p-8 lg:p-12 shadow-medium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">15+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">100+</div>
              <div className="text-sm lg:text-base text-muted-foreground">IIT Selections</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">98%</div>
              <div className="text-sm lg:text-base text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-2">5+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Expert Faculty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;