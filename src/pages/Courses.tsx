import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Foundation Course",
      subtitle: "Class 8-10",
      description: "Build unshakeable fundamentals in Physics, Chemistry & Mathematics. Perfect for students who want to start their competitive exam journey early.",
      duration: "2-3 Years",
      batchSize: "25 Students",
      fee: "₹75,000/year",
      features: [
        "Conceptual clarity in PCM",
        "Regular assessment tests",
        "Doubt clearing sessions",
        "Study material included",
        "Parent-teacher meetings",
        "Scholarship opportunities"
      ],
      highlights: [
        "Foundation building approach",
        "Age-appropriate teaching methods",
        "Regular progress tracking",
        "Olympiad preparation"
      ],
      color: "border-primary bg-primary/5"
    },
    {
      id: 2,
      title: "Target Course",
      subtitle: "Class 11-12 (Integrated)",
      description: "Complete integration of school curriculum with JEE preparation. Designed for students who want to excel in both board exams and JEE.",
      duration: "2 Years",
      batchSize: "30 Students",
      fee: "₹1,25,000/year",
      features: [
        "Board + JEE integrated curriculum",
        "Comprehensive study material",
        "Weekly mock tests",
        "Performance analysis",
        "Individual mentoring",
        "Previous year solutions"
      ],
      highlights: [
        "Dual exam preparation",
        "Time management training",
        "Strategic problem solving",
        "Continuous evaluation"
      ],
      color: "border-secondary bg-secondary/5"
    },
    {
      id: 3,
      title: "JEE Mains Intensive",
      subtitle: "Crash Course",
      description: "High-intensity preparation program focusing specifically on JEE Mains. Perfect for students who want targeted preparation.",
      duration: "6-8 Months",
      batchSize: "35 Students",
      fee: "₹85,000",
      features: [
        "JEE Mains focused curriculum",
        "Daily practice sessions",
        "Mock test series",
        "Time management techniques",
        "Strategy sessions",
        "Rank improvement program"
      ],
      highlights: [
        "Intensive practice regime",
        "Previous year analysis",
        "Shortcut techniques",
        "Speed building exercises"
      ],
      color: "border-accent bg-accent/5"
    },
    {
      id: 4,
      title: "JEE Advanced Elite",
      subtitle: "Premium Program",
      description: "The most advanced program for JEE Advanced preparation. Designed for students targeting top 100 ranks in JEE Advanced.",
      duration: "1 Year",
      batchSize: "20 Students",
      fee: "₹1,50,000",
      features: [
        "Advanced problem solving",
        "IIT faculty sessions",
        "Research methodology",
        "Elite mentoring program",
        "Personalized study plans",
        "Alumni interaction sessions"
      ],
      highlights: [
        "Top 100 rank focus",
        "Advanced conceptual learning",
        "Research-based problems",
        "One-on-one mentoring"
      ],
      color: "border-orange bg-orange/5"
    }
  ];

  const additionalPrograms = [
    {
      title: "Weekend Batches",
      description: "For school students who can only attend on weekends",
      duration: "Every Weekend"
    },
    {
      title: "Online Classes",
      description: "Live interactive classes for remote students",
      duration: "Flexible timing"
    },
    {
      title: "Doubt Clearing Sessions",
      description: "Additional support for concept clarity",
      duration: "Daily 2 hours"
    },
    {
      title: "Test Series",
      description: "Comprehensive mock test programs",
      duration: "Weekly tests"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to take you from foundation to excellence. Choose the path that fits your academic goals and timeline.
          </p>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">
              Main Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully crafted programs designed for different academic levels and goals.
            </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`${course.color} rounded-3xl p-8 lg:p-12 border-2 hover:shadow-medium transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Course Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {course.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {course.subtitle}
                        </p>
                      </div>
                      <Target className="h-10 w-10 text-primary opacity-60" />
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {course.description}
                    </p>

                    {/* Course Details Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">Duration</div>
                          <div className="text-sm text-muted-foreground">{course.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">Batch Size</div>
                          <div className="text-sm text-muted-foreground">{course.batchSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground">Course Fee</div>
                          <div className="text-sm text-muted-foreground">{course.fee}</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlights & CTA */}
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Course Highlights</h4>
                    <div className="space-y-3 mb-6">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full btn-primary">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">
              Additional Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supplementary programs to support your JEE preparation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPrograms.map((program, index) => (
              <div
                key={index}
                className="card-elevated rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {program.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your JEE Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their IIT dreams with Achiever's Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-accent">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Counselling
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;