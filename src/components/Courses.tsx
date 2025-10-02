import React from 'react';
import { Clock, Calendar, Award, CheckCircle, Star, ChefHat, Sparkles } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect Start for Beginners',
      duration: '3 Days',
      type: 'Foundational Course',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Beginner Friendly',
      image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Master the fundamentals of baking with hands-on training in classic cakes, cookies, and essential techniques that form the foundation of every great baker.',
      highlights: [
        'Vanilla & Chocolate Sponge Cakes',
        'Classic Black Forest Cake',
        'Butter Scotch Cookies',
        'Cupcakes & Tea Cakes',
        'Essential Equipment & Techniques'
      ],
      benefits: [
        'Beginner-friendly curriculum',
        'All ingredients provided',
        'Take-home recipe booklet'
      ],
      popular: false,
      color: {
        primary: 'from-amber-500 to-orange-500',
        secondary: 'from-amber-50 to-orange-50',
        badge: 'bg-amber-500',
        text: 'text-amber-600',
        hover: 'hover:from-amber-600 hover:to-orange-600'
      }
    },
    {
      id: 'master',
      title: 'Master in Baking Class',
      subtitle: 'Elevate Your Baking Skills',
      duration: '7 Days',
      type: 'Comprehensive Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Take your baking to the next level with our comprehensive master program covering advanced cakes, pastries, breads, and professional decoration techniques.',
      highlights: [
        'Red Velvet & Marble Cakes',
        'Croissants & Danish Pastries',
        'Artisan Sourdough Bread',
        'Cream Cheese Frosting & Ganache',
        'Multi-layer Cake Assembly',
        'Piping Techniques & Decorations',
        'Professional Presentation Skills'
      ],
      benefits: [
        'Certificate of completion',
        'Professional recipe collection',
        'Small batch - max 6 students'
      ],
      popular: true,
      color: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-50 to-cyan-50',
        badge: 'bg-blue-500',
        text: 'text-blue-600',
        hover: 'hover:from-blue-600 hover:to-cyan-600'
      }
    },
    {
      id: 'advanced',
      title: 'Advanced Patisserie Class',
      subtitle: 'Professional Pastry Mastery',
      duration: '12 Days',
      type: 'Intensive Workshop',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/4686947/pexels-photo-4686947.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Become a pastry expert with our intensive program covering French patisserie, advanced decoration, and professional techniques used in high-end bakeries.',
      highlights: [
        'Strawberry Cheesecake & Tiramisu',
        'French Macarons (Perfect shells)',
        'Chocolate Fudge Cake & Pies',
        'Gourmet Pizza & Artisan Doughnuts',
        'Choux Pastry (Cream Puffs & Éclairs)',
        'Fondant Work & Sugar Crafting',
        'Advanced Decoration Techniques'
      ],
      benefits: [
        'Advanced certification',
        'Professional portfolio guidance',
        'Lifetime recipe access'
      ],
      popular: false,
      color: {
        primary: 'from-rose-500 to-pink-600',
        secondary: 'from-rose-50 to-pink-50',
        badge: 'bg-rose-500',
        text: 'text-rose-600',
        hover: 'hover:from-rose-600 hover:to-pink-700'
      }
    }
  ];

  const handleJoinClass = (courseName: string) => {
    const whatsappMessage = `Hi%20Ayath_iCakes!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20joining%20the%20*${encodeURIComponent(courseName)}*%0A%0APlease%20share%20details%20about%3A%0A%E2%80%A2%20Course%20fees%20%26%20payment%20plans%0A%E2%80%A2%20Next%20available%20batch%20dates%0A%E2%80%A2%20Prerequisites%20(if%20any)%0A%E2%80%A2%20What's%20included%20in%20the%20course%0A%E2%80%A2%20Certification%20details%0A%0AThank%20you!`;
    window.open(`https://wa.me/918248477869?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
            <Sparkles className="h-4 w-4" />
            <span>Now Enrolling - Limited Seats</span>
            <Sparkles className="h-4 w-4" />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Transform Your Passion Into
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Professional Skills
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our expert-led baking classes and master the art of creating stunning cakes, pastries, and desserts.
              From beginner basics to advanced techniques, we have the perfect course for your journey.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <ChefHat className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Expert Instructors</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Award className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Certified Programs</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Star className="h-5 w-5 text-pink-600" />
              </div>
              <span className="font-medium">Hands-On Training</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                course.popular ? 'ring-4 ring-blue-500 ring-offset-4' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-block ${course.color.badge} text-white px-3 py-1 rounded-full text-xs font-bold mb-2`}>
                    {course.type}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-pink-100 text-sm">{course.subtitle}</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className={`h-4 w-4 ${course.color.text}`} />
                      <span className="text-xs text-gray-600 font-medium">Duration</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{course.duration}</p>
                  </div>

                  <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className={`h-4 w-4 ${course.color.text}`} />
                      <span className="text-xs text-gray-600 font-medium">Timing</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{course.schedule.split(' - ')[0]}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Course Curriculum:</span>
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl`}>
                    <p className="text-xs font-semibold text-gray-700 mb-2">What You Get:</p>
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs text-gray-600 mb-1">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleJoinClass(course.title)}
                  className={`w-full bg-gradient-to-r ${course.color.primary} ${course.color.hover} text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group`}
                >
                  <span>Join Class</span>
                  <ChefHat className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  Level: <span className="font-semibold text-gray-700">{course.level}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="bg-pink-500 p-4 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Ayath_iCakes Baking Classes?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-pink-400 mb-2">Small Batch Training</h4>
                <p className="text-gray-300 text-sm">Maximum 6-8 students per batch for personalized attention and hands-on learning</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-pink-400 mb-2">FSSAI Certified</h4>
                <p className="text-gray-300 text-sm">Learn from certified professionals in a registered, hygienic baking studio</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <h4 className="font-bold text-pink-400 mb-2">Lifetime Support</h4>
                <p className="text-gray-300 text-sm">Get ongoing guidance and recipe updates even after course completion</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:8248477869"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call: 8248477869
              </a>
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
