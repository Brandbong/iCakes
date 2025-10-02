import React from 'react';
import { Clock, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 'basic',
      title: 'Basic Baking Class',
      duration: '3 Days',
      type: 'Foundational',
      schedule: '10:30 AM - 2:00 PM',
      image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Vanilla & Chocolate Sponge Cakes',
        'Black Forest Cake',
        'Butter Scotch Cookies',
        'Cupcakes & Tea Cakes',
        'Introduction to essential equipment'
      ],
      color: {
        from: 'from-amber-500',
        to: 'to-orange-600',
        hover: 'hover:from-amber-600 hover:to-orange-700',
        bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
        badge: 'bg-amber-100 text-amber-700'
      }
    },
    {
      id: 'advanced',
      title: 'Advanced Patisserie Class',
      duration: '12 Days',
      type: 'Hands-On Intensive',
      schedule: '10:30 AM - 2:00 PM',
      image: 'https://images.pexels.com/photos/4686947/pexels-photo-4686947.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Strawberry Cheesecake & Tiramisu',
        'Macarons (French)',
        'Chocolate Fudge Cake & Pies',
        'Pizza, Doughnuts, & Artisan Breads',
        'Choux Pastry (Cream Puffs, Éclairs)',
        'Fondant and advanced decoration techniques'
      ],
      color: {
        from: 'from-rose-500',
        to: 'to-pink-600',
        hover: 'hover:from-rose-600 hover:to-pink-700',
        bg: 'bg-gradient-to-br from-rose-50 to-pink-50',
        badge: 'bg-rose-100 text-rose-700'
      }
    }
  ];

  const handleEnroll = (courseName: string) => {
    const whatsappMessage = `Hi%20Ayath_iCakes!%20%F0%9F%91%8B%0A%0AI'd%20like%20to%20enroll%20in%20the%20*${encodeURIComponent(courseName)}*%0A%0APlease%20provide%20me%20with%20more%20details%20about%3A%0A%E2%80%A2%20Course%20fees%20and%20payment%20options%0A%E2%80%A2%20Available%20batch%20dates%0A%E2%80%A2%20Prerequisites%20(if%20any)%0A%E2%80%A2%20Materials%20included%0A%0AThank%20you!%20%F0%9F%98%8A`;
    window.open(`https://wa.me/918248477869?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              New Offering
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Baking <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your passion for baking into skill. Learn from certified professionals in our hands-on classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${course.color.bg} rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`${course.color.badge} px-4 py-2 rounded-full text-xs font-bold shadow-lg`}>
                    {course.type}
                  </span>
                </div>
              </div>

              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="text-sm font-semibold text-gray-900">{course.schedule.split(' - ')[0]}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Mode</p>
                      <p className="text-sm font-semibold text-gray-900">In-Person</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                    <span>What You'll Learn:</span>
                  </h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleEnroll(course.title)}
                  className={`w-full bg-gradient-to-r ${course.color.from} ${course.color.to} ${course.color.hover} text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center space-x-2 group`}
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Limited Spots Available!
          </h3>
          <p className="text-pink-100 text-lg mb-6">
            Small batch sizes ensure personalized attention. Reserve your spot today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8248477869"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Call Us: 8248477869
            </a>
            <a
              href="https://wa.me/918248477869"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
