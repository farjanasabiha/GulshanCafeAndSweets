'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
const OurGallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
    const [floatingVeggies, setFloatingVeggies] = useState([]);
  
    const vegetables = [
      { image: "/14.png" },
      { image: "/5 (1).png" },
      { image: "/40.png" },
    ];
  
    useEffect(() => {
      // Create only 3 fixed veggies
      const positions = [
        { x: 8, y: 70 }, // left side
        { x: 2, y: 20 }, // left side
        { x: 90, y: 40 }, // right side
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

  const galleryItems = [
    {
      id: 1,
      image: "/chicken.jpg",
      description: "Experience the art of tea cultivation and tasting",
    },
    {
      id: 2,
      image: "/bg-side-3.jpg",
      description: "Modern architectural design meets literary sanctuary",
    },
    {
      id: 3,
      image: "/coffee.jpg",
      description: "Sustainable farming practices in scenic landscapes",
    },
    {
      id: 4,
      image: "/vagitable.jpg",
      description: "Learn traditional and modern farming techniques",
    },
    {
      id: 5,
      image: "/biriyani.jpg",
      description: "Cultural events in stunning architectural spaces",
    },
    {
      id: 6,
      image: "/coffee.jpg",
      description: "Detailed craftsmanship in miniature form",
    },
    {
      id: 7,
      image: "/vagitable.jpg",
      description: "Detailed craftsmanship in miniature form",
    },
    {
      id: 8,
      image: "/chicken.jpg",
      description: "Modern architectural design meets literary sanctuary",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50  overflow-hidden relative">
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
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl 
        ${index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
        ${index === 1 ? "lg:col-span-2" : ""}
      `}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="w-full h-full">
                <img
                  src={item.image}
                  alt={item.title || "Gallery Image"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-black/50 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-medium tracking-wide drop-shadow-lg">
                    {item.title || ""}
                  </h3>
                </div>

                {/* Hover Content */}
                <div
                  className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 ${
                    hoveredItem === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-center text-white">
                    <div className="w-16 h-0.5 bg-white mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                    <p className="text-sm sm:text-base font-light leading-relaxed mb-6 max-w-xs">
                      {item.description}
                    </p>
                    <button className="px-6 py-2 border border-white text-white text-sm font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Explore
                    </button>
                  </div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
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
    </section>
  );
};

export default OurGallery;
