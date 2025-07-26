import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for admissions, course details, or any questions about your JEE preparation journey.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-8">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you start your journey to IIT. Reach out to us through any of the following channels, and our team will get back to you promptly.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Our Campus</h3>
                    <p className="text-muted-foreground">
                      123, Education Hub, Near Coaching Square<br />
                      Kota, Rajasthan - 324005<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary rounded-lg p-3">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      Admissions: +91-98765-43210<br />
                      General Inquiry: +91-98765-43211<br />
                      WhatsApp: +91-98765-43212
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent rounded-lg p-3">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      Admissions: admissions@achieversacademy.com<br />
                      General: info@achieversacademy.com<br />
                      Support: support@achieversacademy.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-orange rounded-lg p-3">
                    <Clock className="h-6 w-6 text-orange-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Course Interested In
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="foundation">Foundation Course (Class 8-10)</SelectItem>
                      <SelectItem value="target">Target Course (Class 11-12)</SelectItem>
                      <SelectItem value="mains">JEE Mains Intensive</SelectItem>
                      <SelectItem value="advanced">JEE Advanced Elite</SelectItem>
                      <SelectItem value="online">Online Classes</SelectItem>
                      <SelectItem value="test-series">Test Series Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Class/Status
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class8">Class 8</SelectItem>
                      <SelectItem value="class9">Class 9</SelectItem>
                      <SelectItem value="class10">Class 10</SelectItem>
                      <SelectItem value="class11">Class 11</SelectItem>
                      <SelectItem value="class12">Class 12</SelectItem>
                      <SelectItem value="dropper">12th Pass (Dropper)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your goals, questions, or any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button className="w-full btn-primary" size="lg">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient-primary mb-6">
              Find Our Campus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Kota's education hub, easily accessible by all modes of transport.
            </p>
          </div>
          
          <div className="card-elevated rounded-2xl overflow-hidden">
            <div className="bg-muted/50 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Interactive Map Location
                </p>
                <p className="text-muted-foreground">
                  123, Education Hub, Kota, Rajasthan - 324005
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our admission counselors are available to help you choose the right course and answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-accent">
              Call Now: +91-98765-43210
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;