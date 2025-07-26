import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      rank: "AIR 15, JEE Advanced 2024",
      college: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Achiever's Academy transformed my understanding of Physics and Mathematics. The faculty's dedication and personalized attention helped me achieve my dream of IIT Bombay.",
      rating: 5
    },
    {
      name: "Priya Patel",
      rank: "AIR 42, JEE Advanced 2024",
      college: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "The systematic approach and comprehensive study material at Achiever's Academy made all the difference. I'm grateful for the excellent guidance throughout my JEE journey.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      rank: "AIR 78, JEE Advanced 2024",
      college: "IIT Kanpur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The mock tests and doubt clearing sessions were incredibly helpful. The teachers here don't just teach concepts, they inspire you to think beyond textbooks.",
      rating: 5
    }
  ];

  const parentTestimonials = [
    {
      name: "Mrs. Sunita Agarwal",
      relation: "Mother of Rohit Agarwal (AIR 156)",
      quote: "As a parent, I was impressed by the regular progress updates and the caring environment at Achiever's Academy. They treated my son like their own child.",
      rating: 5
    },
    {
      name: "Mr. Rajesh Kumar",
      relation: "Father of Sneha Kumar (AIR 223)",
      quote: "The transparency in teaching methodology and the excellent results speak for themselves. Achiever's Academy is truly a game-changer for JEE aspirants.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-accent fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students and their parents about their transformative journey at Achiever's Academy.
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            From Our Toppers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elevated rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-accent opacity-20" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-accent"
                  />
                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.rank}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Parent Reviews
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {parentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elevated rounded-2xl p-8 hover:shadow-medium transition-all duration-300"
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-accent opacity-20 mb-4" />
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;