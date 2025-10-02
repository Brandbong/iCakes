import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import CourseDetail from './pages/CourseDetail';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

// Add page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className={`transition-all duration-500 ${
        isAnimating
          ? 'opacity-0 transform translate-y-4'
          : 'opacity-100 transform translate-y-0'
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={<Loading />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </Suspense>
        <Footer />
        <WhatsAppWidget />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;