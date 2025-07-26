import Layout from '@/components/Layout';
import HeroSection from '@/components/HomePage/HeroSection';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import CoursesOverview from '@/components/HomePage/CoursesOverview';
import TestimonialsSection from '@/components/HomePage/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <CoursesOverview />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
