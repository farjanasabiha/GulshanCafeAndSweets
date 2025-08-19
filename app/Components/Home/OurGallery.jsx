import React, { useState } from 'react';

// Mock Next.js Image component since we can't import it directly
const Image = ({ src, alt, width, height, className }) => (
  <img 
    src={src} 
    alt={alt} 
    width={width} 
    height={height} 
    className={className}
  />
);

const OurGallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Gallery items matching the exact layout from the image
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      alt: "Delicious Pancakes with Berries",
      type: "dessert",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      alt: "Food Truck Event",
      type: "event",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop",
      alt: "Tostitos Food Truck",
      type: "truck",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
      alt: "Gourmet Sandwich",
      type: "food",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      alt: "Strawberry Cake",
      type: "dessert",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      alt: "Food Truck Gathering",
      type: "event",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop",
      alt: "Food Truck Park",
      type: "event",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
      alt: "Gourmet Burger and Fries",
      type: "food",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
      alt: "Delicious Crepes with Chocolate",
      type: "featured",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto">
            {/* Row 1 - 3 items */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(1)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[0].src}
                  alt={galleryItems[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Delicious Pancakes</p>
                  <p className="text-sm text-gray-200">Sweet & Fresh</p>
                </div>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(2)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[1].src}
                  alt={galleryItems[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Food Truck Event</p>
                  <p className="text-sm text-gray-200">Community Gathering</p>
                </div>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(3)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[2].src}
                  alt={galleryItems[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Tostitos Truck</p>
                  <p className="text-sm text-gray-200">Street Food</p>
                </div>
              </div>
            </div>

            {/* Row 2 - 3 items */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(4)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[3].src}
                  alt={galleryItems[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Gourmet Sandwich</p>
                  <p className="text-sm text-gray-200">Fresh Ingredients</p>
                </div>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(5)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[4].src}
                  alt={galleryItems[4].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Strawberry Cake</p>
                  <p className="text-sm text-gray-200">Sweet Delight</p>
                </div>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(6)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[5].src}
                  alt={galleryItems[5].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Food Truck Meet</p>
                  <p className="text-sm text-gray-200">Outdoor Dining</p>
                </div>
              </div>
            </div>

            {/* Row 3 - 2 items + 1 large featured */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(7)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[6].src}
                  alt={galleryItems[6].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Food Truck Park</p>
                  <p className="text-sm text-gray-200">Mobile Kitchen</p>
                </div>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredItem(8)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={galleryItems[7].src}
                  alt={galleryItems[7].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-lg font-semibold">Gourmet Burger</p>
                  <p className="text-sm text-gray-200">Premium Quality</p>
                </div>
              </div>
            </div>

            {/* Featured large image */}
<div 
  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
  onMouseEnter={() => setHoveredItem(9)}
  onMouseLeave={() => setHoveredItem(null)}
>
  <div className="aspect-[4/3]">
    <Image
      src={galleryItems[8].src}
      alt={galleryItems[8].alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <p className="text-lg font-semibold">Signature Crepes</p>
      <p className="text-sm text-gray-200">Our most popular dessert</p>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View More Gallery
          </button>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        /* Stagger animation for grid items */
        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        .grid > div:nth-child(6) { animation-delay: 0.6s; }
        .grid > div:nth-child(7) { animation-delay: 0.7s; }
        .grid > div:nth-child(8) { animation-delay: 0.8s; }
        .grid > div:nth-child(9) { animation-delay: 0.9s; }
      `}</style>
    </section>
  );
};

export default OurGallery;