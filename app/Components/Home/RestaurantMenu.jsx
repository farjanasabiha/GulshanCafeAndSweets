'use client'
import React, { useState, useEffect } from "react";
import {
  ChefHat,
  Coffee,
  Pizza,
  Utensils,
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
const RestaurantMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  // Floating Start
    const [floatingVeggies, setFloatingVeggies] = useState([]);
  
  const vegetables = [
    { image: "/34.png" },
    { image: "/15.png" },
    { image: "/25.png" },
  ];
  
    useEffect(() => {
      // Create only 3 fixed veggies
      const positions = [

        { x: 6, y: 80 }, // left side
        { x: 2, y: 20 }, // left side
        { x: 90, y: 80 }, // right side
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
      // Floating End

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = {
    soup: [
      {
        name: "Tomato Basil Soup",
        description: "Fresh tomatoes with aromatic basil and cream",
        price: "$5.60",
      },
      {
        name: "Chicken Noodle Soup",
        description: "Hearty chicken broth with tender noodles",
        price: "$5.60",
      },
      {
        name: "Mushroom Bisque",
        description: "Rich and creamy mushroom soup",
        price: "$5.60",
      },
      {
        name: "Vegetable Soup",
        description: "Seasonal vegetables in clear broth",
        price: "$5.60",
      },
      {
        name: "Seafood Chowder",
        description: "Creamy chowder with fresh seafood",
        price: "$5.60",
      },
    ],
    drinks: [
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice",
        price: "$5.60",
      },
      {
        name: "Iced Coffee",
        description: "Cold brew coffee with ice",
        price: "$5.60",
      },
      {
        name: "Lemonade",
        description: "Fresh lemon juice with sparkling water",
        price: "$5.60",
      },
      {
        name: "Green Smoothie",
        description: "Healthy blend of greens and fruits",
        price: "$5.60",
      },
      {
        name: "Artisan Tea",
        description: "Premium tea selection",
        price: "$5.60",
      },
    ],
    pizza: [
      {
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, and basil",
        price: "$5.60",
      },
      {
        name: "Pepperoni Classic",
        description: "Traditional pepperoni with cheese",
        price: "$5.60",
      },
      {
        name: "Vegetarian Special",
        description: "Fresh vegetables and herbs",
        price: "$5.60",
      },
      {
        name: "Meat Lovers",
        description: "Multiple meats with rich cheese",
        price: "$5.60",
      },
      {
        name: "BBQ Chicken",
        description: "Grilled chicken with BBQ sauce",
        price: "$5.60",
      },
    ],
    dinner: [
      {
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with herbs",
        price: "$5.60",
      },
      {
        name: "Beef Tenderloin",
        description: "Premium cut with seasonal vegetables",
        price: "$5.60",
      },
      {
        name: "Chicken Parmesan",
        description: "Breaded chicken with marinara",
        price: "$5.60",
      },
      {
        name: "Pasta Primavera",
        description: "Fresh pasta with garden vegetables",
        price: "$5.60",
      },
      {
        name: "Lamb Chops",
        description: "Herb-crusted lamb with mint sauce",
        price: "$5.60",
      },
    ],
    lunch: [
      {
        name: "Caesar Salad",
        description: "Crisp romaine with classic dressing",
        price: "$5.60",
      },
      {
        name: "Club Sandwich",
        description: "Triple-decker with turkey and bacon",
        price: "$5.60",
      },
      {
        name: "Fish Tacos",
        description: "Grilled fish with fresh salsa",
        price: "$5.60",
      },
      {
        name: "Quinoa Bowl",
        description: "Healthy quinoa with mixed vegetables",
        price: "$5.60",
      },
      {
        name: "Burger Deluxe",
        description: "Gourmet burger with premium toppings",
        price: "$5.60",
      },
    ],
    breakfast: [
      {
        name: "Pancakes Stack",
        description: "Fluffy pancakes with maple syrup",
        price: "$5.60",
      },
      {
        name: "Eggs Benedict",
        description: "Poached eggs on English muffin",
        price: "$5.60",
      },
      {
        name: "Avocado Toast",
        description: "Fresh avocado on artisan bread",
        price: "$5.60",
      },
      {
        name: "French Toast",
        description: "Thick-cut bread with cinnamon",
        price: "$5.60",
      },
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, and fresh salsa",
        price: "$5.60",
      },
    ],
  };

  const categories = [
    { id: "soup", name: "SOUP", icon: Coffee, color: "text-red-500" },
    { id: "drinks", name: "DRINKS", icon: Coffee, color: "text-red-500" },
    { id: "pizza", name: "PIZZA", icon: Pizza, color: "text-red-500" },
    { id: "dinner", name: "DINNER", icon: ChefHat, color: "text-red-500" },
    { id: "lunch", name: "LUNCH", icon: Utensils, color: "text-red-500" },
    { id: "breakfast", name: "BREAKFAST", icon: Clock, color: "text-red-500" },
  ];

  const getDisplayedItems = () => {
    if (activeCategory === "all") {
      return Object.values(menuItems).flat();
    }
    return menuItems[activeCategory] || [];
  };

  const getItemsPerCategory = (categoryId) => {
    return menuItems[categoryId]?.slice(0, 5) || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4  overflow-hidden relative">
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
      <div className="absolute top-28 right-0">
        <Image src="/37.png" alt="vegetable" height={200} width={200} />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h3 className="text-red-500 font-script text-xl mb-4 transform hover:scale-105 transition-transform duration-300">
              Food Item
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 relative">
              OUR MENU
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500 rounded-full"></div>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-1 text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const categoryItems = getItemsPerCategory(category.id);

            return (
              <div
                key={category.id}
                className={`bg-white rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="bg-[#ffe8d0] group-hover:bg-[#d14747] transition duration-300 p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-red-500 group-hover:text-white font-bold text-xl tracking-wider">
                    — {category.name} —
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="p-6 space-y-1">
                  {categoryItems.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <span className="text-red-500 font-bold text-lg ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="w-full h-px bg-gray-200 mt-3 group-hover:bg-red-300 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Menu Button */}
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-orange-600">
            <span className="mr-3 text-lg">FULL MENU</span>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
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
    </div>
  );
};

export default RestaurantMenu;
