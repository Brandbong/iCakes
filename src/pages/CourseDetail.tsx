import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock, Calendar, Award, CheckCircle, Star, ChefHat,
  ArrowLeft, Users, BookOpen, Target, TrendingUp, Gift
} from 'lucide-react';

interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  type: string;
  schedule: string;
  level: string;
  image: string;
  heroImage: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  benefits: string[];
  prerequisites: string[];
  whatYouLearn: string[];
  perfectFor: string[];
  includes: string[];
  outcomes: string[];
  color: {
    primary: string;
    secondary: string;
    badge: string;
    text: string;
    hover: string;
  };
}

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const coursesData: Record<string, CourseData> = {
    basic: {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect Start for Beginners',
      duration: '3 Days',
      type: 'Foundational Course',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Beginner Friendly',
      image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=800',
      heroImage: 'https://images.pexels.com/photos/3785680/pexels-photo-3785680.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Master the fundamentals of baking with hands-on training in classic cakes, cookies, and essential techniques.',
      fullDescription: 'Our Basic Baking Class is meticulously designed for absolute beginners who want to start their baking journey on the right foot. Over three intensive days, you will learn the foundational techniques that every successful baker needs to know. From understanding ingredients and their properties to mastering mixing methods and baking temperatures, this course covers it all. You will work hands-on with professional equipment in our FSSAI-certified kitchen, creating delicious treats under expert guidance.',
      highlights: [
        'Vanilla & Chocolate Sponge Cakes',
        'Classic Black Forest Cake',
        'Butter Scotch Cookies',
        'Cupcakes & Tea Cakes',
        'Essential Equipment & Techniques'
      ],
      whatYouLearn: [
        'Understanding different types of flour and their uses',
        'Proper measuring techniques for accurate results',
        'Mixing methods: Creaming, folding, and whisking',
        'Oven temperature control and baking times',
        'Cake leveling and basic frosting techniques',
        'Cookie dough preparation and baking',
        'Troubleshooting common baking problems'
      ],
      perfectFor: [
        'Complete beginners with no baking experience',
        'Home bakers wanting to improve their basics',
        'Anyone looking to start a home baking business',
        'Parents who want to bake for their children',
        'Gift for loved ones interested in baking'
      ],
      prerequisites: [
        'No prior baking experience required',
        'Just bring your enthusiasm and passion for baking',
        'All equipment and ingredients provided'
      ],
      includes: [
        'All ingredients and materials',
        'Professional recipe booklet',
        'Apron and baking tools kit',
        'Certificate of participation',
        'Take home your baked creations',
        'Lifetime WhatsApp support group'
      ],
      benefits: [
        'Beginner-friendly curriculum',
        'All ingredients provided',
        'Take-home recipe booklet'
      ],
      outcomes: [
        'Bake perfect sponge cakes every time',
        'Create professional-looking cupcakes',
        'Master cookie baking techniques',
        'Understand ingredient functions',
        'Confidence to experiment with recipes',
        'Foundation for advanced baking'
      ],
      color: {
        primary: 'from-amber-500 to-orange-500',
        secondary: 'from-amber-50 to-orange-50',
        badge: 'bg-amber-500',
        text: 'text-amber-600',
        hover: 'hover:from-amber-600 hover:to-orange-600'
      }
    },
    master: {
      id: 'master',
      title: 'Master in Baking Class',
      subtitle: 'Elevate Your Baking Skills',
      duration: '7 Days',
      type: 'Comprehensive Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
      heroImage: 'https://images.pexels.com/photos/4686945/pexels-photo-4686945.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Take your baking to the next level with our comprehensive master program covering advanced techniques.',
      fullDescription: 'The Master in Baking Class is our signature comprehensive program designed for those ready to elevate their baking skills to a professional level. This intensive 7-day course takes you deep into the art and science of baking, covering everything from complex layered cakes to artisan breads and French pastries. You will learn professional techniques used in high-end bakeries, master the art of beautiful cake decoration, and understand the chemistry behind perfect baking. This course is perfect for serious home bakers and aspiring professional bakers.',
      highlights: [
        'Red Velvet & Marble Cakes',
        'Croissants & Danish Pastries',
        'Artisan Sourdough Bread',
        'Cream Cheese Frosting & Ganache',
        'Multi-layer Cake Assembly',
        'Piping Techniques & Decorations',
        'Professional Presentation Skills'
      ],
      whatYouLearn: [
        'Advanced cake mixing and layering techniques',
        'Lamination for croissants and Danish pastries',
        'Sourdough starter creation and maintenance',
        'Professional frosting and ganache preparation',
        'Multi-tier cake construction and support',
        'Advanced piping techniques and patterns',
        'Color theory and flavor pairing',
        'Professional cake photography and presentation',
        'Costing and pricing your baked goods',
        'Food safety and hygiene standards'
      ],
      perfectFor: [
        'Home bakers with basic baking knowledge',
        'Aspiring professional bakers',
        'Those planning to start a baking business',
        'Bakers wanting to expand their menu',
        'Anyone serious about mastering baking'
      ],
      prerequisites: [
        'Basic baking knowledge recommended',
        'Familiarity with baking terminology',
        'Willingness to practice between sessions'
      ],
      includes: [
        'All premium ingredients and materials',
        'Professional recipe collection (50+ recipes)',
        'Complete baking tools starter kit',
        'Certificate of completion',
        'Business setup guidance session',
        'Lifetime recipe updates',
        'Priority support group access',
        'Vendor contact list'
      ],
      benefits: [
        'Certificate of completion',
        'Professional recipe collection',
        'Small batch - max 6 students'
      ],
      outcomes: [
        'Master complex baking techniques',
        'Create restaurant-quality pastries',
        'Build multi-tier celebration cakes',
        'Start your own baking business',
        'Price your products professionally',
        'Develop signature recipes',
        'Join our alumni network'
      ],
      color: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-50 to-cyan-50',
        badge: 'bg-blue-500',
        text: 'text-blue-600',
        hover: 'hover:from-blue-600 hover:to-cyan-600'
      }
    },
    advanced: {
      id: 'advanced',
      title: 'Advanced Patisserie Class',
      subtitle: 'Professional Pastry Mastery',
      duration: '12 Days',
      type: 'Intensive Workshop',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/4686947/pexels-photo-4686947.jpeg?auto=compress&cs=tinysrgb&w=800',
      heroImage: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Become a pastry expert with our intensive program covering French patisserie and advanced decoration.',
      fullDescription: 'Our Advanced Patisserie Class is the ultimate program for serious bakers who want to master the art of French pastry and professional dessert creation. This intensive 12-day masterclass covers the most challenging and sought-after techniques in the baking world. From perfect French macarons to intricate fondant work and sugar crafting, you will learn the skills that set professional pastry chefs apart. This course includes advanced decoration techniques, modern plating concepts, and the business acumen needed to succeed in the competitive world of professional baking.',
      highlights: [
        'Strawberry Cheesecake & Tiramisu',
        'French Macarons (Perfect shells)',
        'Chocolate Fudge Cake & Pies',
        'Gourmet Pizza & Artisan Doughnuts',
        'Choux Pastry (Cream Puffs & Éclairs)',
        'Fondant Work & Sugar Crafting',
        'Advanced Decoration Techniques'
      ],
      whatYouLearn: [
        'Perfect macaron technique (Italian meringue method)',
        'Advanced chocolate work and tempering',
        'Fondant covering and modeling',
        'Sugar flowers and isomalt decorations',
        'Modern plating and presentation',
        'Choux pastry mastery',
        'Layered mousse desserts',
        'Entremet creation',
        'Texture and flavor combinations',
        'Portfolio development for professionals',
        'Social media marketing for bakers',
        'Client management and custom orders'
      ],
      perfectFor: [
        'Experienced bakers seeking mastery',
        'Professional bakers expanding skills',
        'Cake business owners',
        'Culinary students',
        'Those pursuing baking as a career'
      ],
      prerequisites: [
        'Solid foundation in basic and intermediate baking',
        'Completion of similar courses or equivalent experience',
        'Ability to work under pressure',
        'Commitment to practice and perfection'
      ],
      includes: [
        'Premium imported ingredients',
        'Advanced recipe masterclass collection',
        'Professional-grade tools and equipment',
        'Advanced certification',
        'Portfolio photoshoot session',
        'Business mentorship (3 months)',
        'Website template for your business',
        'Branding and marketing guidance',
        'Exclusive alumni events access',
        'Lifetime master support group'
      ],
      benefits: [
        'Advanced certification',
        'Professional portfolio guidance',
        'Lifetime recipe access'
      ],
      outcomes: [
        'Master French patisserie techniques',
        'Create Instagram-worthy desserts',
        'Build a professional portfolio',
        'Launch a premium baking brand',
        'Command premium pricing',
        'Network with industry professionals',
        'Become a baking instructor yourself'
      ],
      color: {
        primary: 'from-rose-500 to-pink-600',
        secondary: 'from-rose-50 to-pink-50',
        badge: 'bg-rose-500',
        text: 'text-rose-600',
        hover: 'hover:from-rose-600 hover:to-pink-700'
      }
    }
  };

  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-pink-600 hover:text-pink-700"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const handleJoinClass = () => {
    const whatsappMessage = `Hi%20Ayath_iCakes!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20joining%20the%20*${encodeURIComponent(course.title)}*%0A%0APlease%20share%20details%20about%3A%0A%E2%80%A2%20Course%20fees%20%26%20payment%20plans%0A%E2%80%A2%20Next%20available%20batch%20dates%0A%E2%80%A2%20What's%20included%20in%20the%20course%0A%E2%80%A2%20Certification%20details%0A%0AThank%20you!`;
    window.open(`https://wa.me/918248477869?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-96 overflow-hidden">
        <img
          src={course.heroImage}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => navigate('/')}
              className="mb-6 flex items-center space-x-2 text-white hover:text-pink-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Courses</span>
            </button>

            <div className={`inline-block ${course.color.badge} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
              {course.type}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {course.title}
            </h1>
            <p className="text-2xl text-pink-200 mb-6">{course.subtitle}</p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">{course.schedule}</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Award className="h-5 w-5" />
                <span className="font-semibold">{course.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{course.fullDescription}</p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${course.color.primary} p-3 rounded-xl`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${course.color.primary} p-3 rounded-xl`}>
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Course Curriculum</h2>
              </div>
              <div className="space-y-3">
                {course.highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white border-2 border-gray-100 p-5 rounded-xl hover:border-pink-200 transition-colors">
                    <div className={`bg-gradient-to-r ${course.color.primary} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${course.color.primary} p-3 rounded-xl`}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Perfect For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.perfectFor.map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${course.color.secondary} p-5 rounded-xl border-2 border-transparent hover:border-pink-300 transition-colors`}>
                    <div className="flex items-start space-x-3">
                      <ChefHat className={`h-5 w-5 ${course.color.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${course.color.primary} p-3 rounded-xl`}>
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Learning Outcomes</h2>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100">
                <p className="text-gray-600 mb-6">By the end of this course, you will be able to:</p>
                <div className="space-y-3">
                  {course.outcomes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Target className={`h-5 w-5 ${course.color.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                <div className="mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Details</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-bold text-gray-900">{course.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-bold text-gray-900">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Batch Size:</span>
                    <span className="font-bold text-gray-900">Max 6-8</span>
                  </div>
                </div>

                <button
                  onClick={handleJoinClass}
                  className={`w-full bg-gradient-to-r ${course.color.primary} ${course.color.hover} text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group mb-4`}
                >
                  <span>Join This Class</span>
                  <ChefHat className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </button>

                <div className="text-center space-y-2">
                  <a
                    href="tel:8248477869"
                    className="block text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Or Call: 8248477869
                  </a>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${course.color.secondary} rounded-2xl p-6 border-2 border-gray-100`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Gift className={`h-5 w-5 ${course.color.text}`} />
                  <h3 className="text-lg font-bold text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-3">
                  {course.includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Prerequisites</h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
