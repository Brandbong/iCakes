import React from 'react';
import Hero from '../components/Hero';
import CoursesBanner from '../components/CoursesBanner';
import About from '../components/About';
import Courses from '../components/Courses';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <CoursesBanner />
      <About />
      <Courses />
      <Specialties />
      <Testimonials />
    </div>
  );
};

export default Home;