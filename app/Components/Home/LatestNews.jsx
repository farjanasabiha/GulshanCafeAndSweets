'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Eye } from 'lucide-react';
import Image from "next/image";
const LatestNews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [floatingVeggies, setFloatingVeggies] = useState([]);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsItems = [
    {
      id: 1,
      image: '/chicken.jpg',
      date: 'July 05, 2020',
      title: 'The Art of Perfect Cooking',
      excerpt: 'Lorem Ipsum is simply dummy text of the printing and typese...',
      author: 'Chef Martinez',
      readTime: '5 min read',
      category: 'Cooking Tips',
      theme: 'from-red-400 via-pink-400 to-red-500'
    },
    {
      id: 2,
      image: '/bg-side-3.jpg',
      date: 'July 05, 2020',
      title: 'Fresh Ingredients Matter',
      excerpt: 'Lorem Ipsum is simply dummy text the printing and typese...',
      author: 'Chef Martinez',
      readTime: '3 min read',
      category: 'Ingredients',
      theme: 'from-orange-400 via-yellow-400 to-orange-500'
    },
    {
      id: 3,
      image: '/fish.jpg',
      date: 'July 05, 2020',
      title: 'Grilling Like a Professional',
      excerpt: 'Lorem Ipsum is simply dummy text of the printing and typese...',
      author: 'Chef Martinez',
      readTime: '7 min read',
      category: 'Techniques',
      theme: 'from-gray-700 via-gray-800 to-black'
    }
  ];

    const vegetables = [
      { image: "/14.png" },
      { image: "/41.png" },
  ];
  
    useEffect(() => {
      // Create only 3 fixed veggies
      const positions = [
        { x: 2, y: 20 }, // left side
        { x: 90, y: 50 }, // right side
      ];
  
      const initialVeggies = vegetables.map((veg, i) => ({
        id: i,
        veggie: veg.image,
        x: positions[i].x,
        y: positions[i].y,
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        animationDuration: 3 + Math.random() * 4,
      }));
  
      setFloatingVeggies(initialVeggies);
    }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 overflow-hidden relative">
      {/* Floating Vegetables */}
      {floatingVeggies.map((veggie) => (
        <div
          key={veggie.id}
          className="absolute pointer-events-none opacity-80"
          style={{
            left: `${veggie.x}%`,
            top: `${veggie.y}%`,
            transform: `rotate(${veggie.rotation}deg) scale(${veggie.scale})`,
            animation: `float ${veggie.animationDuration}s ease-in-out infinite alternate`,
          }}
        >
          <Image src={veggie.veggie} alt="vegetable" height={120} width={150} />
        </div>
      ))}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-left mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-red-500 font-script text-2xl mb-2 transform hover:scale-105 transition-transform duration-300">
            Our News
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 relative">
            LATEST NEWS
            <div className="absolute mt-5 -bottom-2 left-0 w-32 h-1 bg-red-500 rounded-full transform origin-left hover:scale-x-110 transition-transform duration-500"></div>
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === item.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Category */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full transform transition-all duration-500 ${
                    hoveredCard === item.id
                      ? "scale-110 bg-red-600"
                      : "scale-100"
                  }`}
                >
                  {item.category}
                </div>

                {/* Avatar */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center text-gray-500 text-sm mb-3 group-hover:text-red-500 transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Posted {item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {item.author}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {item.readTime}
                  </span>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-500 transform flex items-center justify-center group-hover:scale-105 ${
                    index === 0
                      ? "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl"
                      : "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  <span className="mr-2">CONTINUE READING</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredCard === item.id ? "translate-x-2" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LatestNews;
