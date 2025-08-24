// 'use client'
// import React, { useState, useEffect } from "react";

// const HomeHeader = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div
//           className="w-full h-full bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://www.madebydesignesia.com/themes/delizus/images-slider/wide1.jpg')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>
//       </div>

//       {/* Settings Icon (Top Left) */}
//       <div className="absolute top-6 left-6 z-20">
//         <div
//           className={`w-8 h-8 text-white cursor-pointer hover:rotate-90 transition-transform duration-500 ${
//             isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
//           }`}
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-full h-full"
//           >
//             <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//           </svg>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center">
//         <div className="text-center px-4 max-w-4xl mx-auto">
//           {/* Main Heading */}
//           <div
//             className={`mb-8 transition-all duration-1000 ease-out transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-light text-white tracking-[0.3em] leading-tight">
//               gulshan Cafe and Sweets
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <div
//             className={`mb-12 transition-all duration-1000 ease-out transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//             style={{ transitionDelay: "600ms" }}
//           >
//             <p
//               className="text-lg md:text-xl lg:text-2xl text-orange-400 font-light tracking-wide animate-fade-in-up"
//               style={{ animationDelay: "0.8s" }}
//             >
//               Enjoy the real fresh food from our chef.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div
//             className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ease-out transform ${
//               isVisible
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//             style={{ transitionDelay: "800ms" }}
//           >
//             <button
//               className="group relative px-10 py-4 border-2 border-white text-white font-semibold text-lg tracking-wide rounded-full hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 overflow-hidden animate-slide-up"
//               style={{ animationDelay: "1s" }}
//             >
//               <span className="relative z-10">BOOK NOW</span>
//               <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//             </button>

//             {/* View Menu Button - Filled Style */}
//             <button
//               className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg tracking-wide rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up"
//               style={{ animationDelay: "1.2s" }}
//             >
//               <span className="relative z-10">VIEW MENU</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
//             </button>
//           </div>

//           {/* Decorative Elements */}
//           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
//           <div
//             className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-40"
//             style={{ animationDelay: "1s" }}
//           ></div>
//           <div
//             className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-50"
//             style={{ animationDelay: "2s" }}
//           ></div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
//         }`}
//         style={{ transitionDelay: "1.4s" }}
//       >
//         <div className="flex flex-col items-center animate-bounce-slow">
//           <div className="w-6 h-10 border-2 border-white rounded-full mb-2 relative">
//             <div className="w-1 h-3 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-scroll"></div>
//           </div>
//           <span className="text-white text-xs tracking-widest opacity-80">
//             SCROLL
//           </span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-in-left {
//           0% {
//             transform: translateX(-100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slide-in-center {
//           0% {
//             transform: translateY(-50px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slide-in-right {
//           0% {
//             transform: translateX(100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes fade-in-up {
//           0% {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slide-up {
//           0% {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         @keyframes scroll {
//           0% {
//             opacity: 0;
//             transform: translate(-50%, 0);
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-50%, 12px);
//           }
//         }
//         @keyframes bounce-slow {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s ease-out forwards;
//         }
//         .animate-slide-in-center {
//           animation: slide-in-center 0.8s ease-out forwards;
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s ease-out forwards;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out forwards;
//         }
//         .animate-scroll {
//           animation: scroll 2s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomeHeader;








import React from "react";

export default function HomeHeader() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
        style={{
          backgroundImage: `url('tea.jpg')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Additional Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 h-full px-6 ">
        <div className="max-w-7xl mx-auto text-left py-28">
          {/* Badge/Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fadeInUp">
            <span className="text-sm font-medium text-white/90 tracking-wide">
              🍽️ Flavorful Authentic Dining
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Welcome To
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f8ba0e]  to-orange-600">
              Gulshan Cafe <br /> And Sweets
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl  text-white/70 mb-8 max-w-2xl leading-relaxed font-light animate-fadeInUp animation-delay-400">
            Wecome Gulshan Cafe and Sweets. Serving authentic Bangladeshi
            home-style halal food in Albany, NY. From traditional dishes to
            handcrafted sweets, each meal reflects rich heritage and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-[linear-gradient(155deg,#ff6b35_0%,#f8ba0e_100%)] text-white font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10">View Menu</span>
            </button>

            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <span className="flex items-center gap-2">
                Order Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}