import Layout from '@/components/Layout';
import { Users, Award, Target, Heart, Building, BookOpen } from 'lucide-react';
import instituteBuilding from '@/assets/institute-building.jpg';
import teacherTeaching from '@/assets/teacher-teaching.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence in every aspect of our teaching methodology."
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every student is treated with personal care and attention to nurture their potential."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest standards of ethical practices in education."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in collaborative learning between students, teachers, and parents."
    }
  ];

  const milestones = [
    { year: "2009", event: "Achiever's Academy founded with a vision to transform JEE preparation" },
    { year: "2012", event: "First batch achieves 100% JEE qualification rate" },
    { year: "2015", event: "Expansion to accommodate 1000+ students annually" },
    { year: "2018", event: "Introduction of digital learning platforms and online classes" },
    { year: "2021", event: "5000th student secures admission to IIT" },
    { year: "2024", event: "Celebrating 15 years of excellence with 98% success rate" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Achiever's Academy
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Nurturing dreams, building futures, and creating the next generation of engineers for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2009 with a simple yet powerful vision: to make quality JEE preparation accessible to every aspiring engineer. What started as a small coaching center with 25 students has grown into one of India's most respected JEE coaching institutes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey has been marked by consistent innovation in teaching methodologies, a deep commitment to student success, and an unwavering focus on academic excellence. Today, we're proud to have guided over 5,000 students to their dream IITs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">IIT Selections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={instituteBuilding} 
                alt="Achiever's Academy Building" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-elevated rounded-2xl p-8">
              <div className="bg-primary rounded-2xl p-4 w-16 h-16 mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class JEE preparation through innovative teaching methods, personalized attention, and comprehensive support, ensuring every student achieves their highest potential and secures admission to premier engineering institutions.
              </p>
            </div>
            <div className="card-elevated rounded-2xl p-8">
              <div className="bg-secondary rounded-2xl p-4 w-16 h-16 mb-6">
                <Award className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and respected JEE coaching institute, known for academic excellence, ethical practices, and the holistic development of future engineers who will contribute to the nation's technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={teacherTeaching} 
                alt="Director Message" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gradient-primary mb-6">From the Director's Desk</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "Education is not just about imparting knowledge; it's about igniting the spark of curiosity and nurturing the confidence to pursue excellence. At Achiever's Academy, we don't just prepare students for JEE; we prepare them for life."
                </p>
                <div className="text-right">
                  <p className="font-bold text-foreground">Dr. Rajesh Gupta</p>
                  <p className="text-sm text-muted-foreground">Founder & Director</p>
                  <p className="text-xs text-muted-foreground">B.Tech (IIT Delhi), Ph.D (IIT Bombay)</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With over 20 years of experience in engineering education and a passion for teaching, Dr. Gupta founded Achiever's Academy with the vision of making quality JEE preparation accessible to all aspiring engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Achiever's Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="bg-primary rounded-2xl p-4 w-16 h-16 mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our 15-year journey of excellence.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="card-elevated rounded-xl p-6 flex-1">
                    <p className="text-muted-foreground leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;