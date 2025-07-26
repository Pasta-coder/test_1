import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesOverview = () => {
  const courses = [
    {
      title: "Foundation Course",
      subtitle: "Class 8-10",
      description: "Build strong fundamentals in Physics, Chemistry & Mathematics for competitive exam success.",
      duration: "2-3 Years",
      batchSize: "100 Students",
      highlights: ["Concept Building", "Regular Tests", "Doubt Sessions", "Study Material"],
      color: "border-primary bg-primary/5"
    },
    {
      title: "Target Course",
      subtitle: "Class 11-12",
      description: "Integrated school + coaching curriculum designed specifically for JEE preparation.",
      duration: "2 Years",
      batchSize: "100 Students",
      highlights: ["JEE Syllabus", "Board Prep", "Mock Tests", "Performance Analysis"],
      color: "border-secondary bg-secondary/5"
    },
    {
      title: "JEE Mains",
      subtitle: "Crash Course",
      description: "Intensive preparation for JEE Mains with focused practice and problem-solving techniques.",
      duration: "4 Months",
      batchSize: "100 Students",
      highlights: ["Intensive Practice", "Previous Papers", "Time Management", "Strategy Sessions"],
      color: "border-accent bg-accent/5"
    },
    {
      title: "JEE Advanced",
      subtitle: "Elite Program",
      description: "Advanced problem-solving and deep conceptual understanding for JEE Advanced success.",
      duration: "2 Year",
      batchSize: "100 Students",
      highlights: ["Advanced Problems", "IIT Faculty", "Research Methods", "Elite Mentoring"],
      color: "border-orange bg-orange/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to take you from foundation to excellence. Choose the path that fits your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`${course.color} rounded-2xl p-8 border-2 hover:shadow-medium transition-all duration-300 group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {course.subtitle}
                  </p>
                </div>
                <Target className="h-8 w-8 text-primary opacity-60" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Course Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{course.batchSize}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Course Highlights:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link to="/courses">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/admissions">
                  <Button className="btn-primary">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button size="lg" className="btn-accent">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesOverview;