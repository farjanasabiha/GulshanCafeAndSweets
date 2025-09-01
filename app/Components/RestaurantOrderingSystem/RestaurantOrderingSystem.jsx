'use client'
import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Check,
  Clock,
  Search,
  X,
} from "lucide-react";

const RestaurantOrderingSystem = () => {
  const [currentScreen, setCurrentScreen] = useState("landing");
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: "",
    name: "",
    phone: "",
    email: "",
  });
  const [activeCategory, setActiveCategory] = useState("starters");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(20);

  const categoryRefs = useRef({});

  const menuData = {
    starters: [
      {
        id: 1,
        name: "Crispy Calamari",
        price: 12.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Fresh squid rings with marinara sauce",
      },
      {
        id: 2,
        name: "Bruschetta Trio",
        price: 9.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Three varieties of signature bruschetta",
      },
      {
        id: 3,
        name: "Buffalo Wings",
        price: 14.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "8 pieces with celery and blue cheese",
      },
      {
        id: 4,
        name: "Mozzarella Sticks",
        price: 8.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Golden fried with marinara dip",
      },
      {
        id: 5,
        name: "Spinach Artichoke Dip",
        price: 11.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Hot creamy dip with tortilla chips",
      },
    ],
    mains: [
      //   {
      //     id: 25,
      //     name: "Grilled Salmon",
      //     price: 24.99,
      //     image: "🐟",
      //     description: "Atlantic salmon with lemon herb butter",
      //   },
      //   {
      //     id: 26,
      //     name: "Ribeye Steak",
      //     price: 32.99,
      //     image: "🥩",
      //     description: "12oz prime cut with garlic mashed potatoes",
      //   },
      //   {
      //     id: 27,
      //     name: "Chicken Parmesan",
      //     price: 19.99,
      //     image: "🍗",
      //     description: "Breaded chicken with marinara and mozzarella",
      //   },
      //   {
      //     id: 28,
      //     name: "Mushroom Risotto",
      //     price: 18.99,
      //     image: "🍄",
      //     description: "Creamy arborio rice with wild mushrooms",
      //   },
      {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
            {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },      {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
            {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
            {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
      ,      {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
            {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
            {
        id: 29,
        name: "Fish & Chips",
        price: 16.99,
        image: "/Beef-Fried-Rice.jpg",
        description: "Beer battered cod with fries",
      },
    ],
    desserts: [
      {
        id: 57,
        name: "Chocolate Lava Cake",
        price: 8.99,
        image: "/Balu-Shahi.jpg",
        description: "Warm chocolate cake with vanilla ice cream",
      },
      {
        id: 58,
        name: "Tiramisu",
        price: 7.99,
        image: "/Balu-Shahi.jpg",
        description: "Classic Italian coffee-flavored dessert",
      },
      {
        id: 59,
        name: "Cheesecake",
        price: 6.99,
        image: "/Balu-Shahi.jpg",
        description: "New York style with berry topping",
      },
            {
        id: 59,
        name: "Cheesecake",
        price: 6.99,
        image: "/Balu-Shahi.jpg",
        description: "New York style with berry topping",
      },
      {
        id: 60,
        name: "Apple Pie",
        price: 6.99,
        image: "/Balu-Shahi.jpg",
        description: "Homemade with vanilla ice cream",
      },
    ],
  };

  const allItems = Object.values(menuData).flat();

  const getFilteredItems = (category) => {
    const categoryItems = menuData[category] || [];
    if (!searchTerm) return categoryItems.slice(0, visibleItems);
    return categoryItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, visibleItems);
  };

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (field, value) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }));
  };

  const submitOrder = () => {
    console.log("Order submitted:", { cart, orderDetails });
    setCurrentScreen("confirmation");
    setCartDrawerOpen(false);
  };

  if (currentScreen === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🍽️</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Bella Vista
            </h1>
            <p className="text-gray-600">Authentic Italian Dining</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Welcome!
            </h2>
            <p className="text-gray-600 mb-6">
              Browse our extensive menu and place your order directly from your
              table
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen("menu")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Order
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "menu") {
    return (
      <div className="bg-white">
        <div className="min-h-screen  mx-auto max-w-7xl flex">
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${
              sidebarOpen ? "lg:mr-80" : ""
            } pb-24 lg:pb-4`}
          >
            <div className="sticky top-0 bg-white shadow-sm z-30">
              <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🍽️</span>
                  <h1 className="text-xl font-bold text-gray-800">
                    Bella Vista
                  </h1>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search menu items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="flex overflow-x-auto px-4 pb-4 space-x-2">
                {Object.keys(menuData).map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium ${
                      activeCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4">
              {Object.keys(menuData).map((category) => (
                <div
                  key={category}
                  ref={(el) => (categoryRefs.current[category] = el)}
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-4 mt-6 first:mt-0">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h2>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {getFilteredItems(category).map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-300/60 rounded-lg  p-3 flex items-center justify-starts gap-6"
                      >
                        <div>
                          <div className="text-3xl mb-2 text-center">
                            <Image
                            className="rounded-xl h-28 w-28"
                              src={item.image}
                              alt="vegetable"
                              height={100}
                              width={100}
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-2xl text-gray-800 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-orange-600 font-bold text-sm mb-3">
                            Price : ${item.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-transparent text-xs text-orange-500 font-bold uppercase hover:bg-orange-500 hover:text-white py-2 px-4 border border-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                          >
                            order NOW
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`hidden lg:block fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 border-b flex items-center justify-between bg-orange-500 text-white">
              <h2 className="text-xl font-bold">Your Order</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-orange-600 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <ShoppingCart
                      size={48}
                      className="mx-auto mb-4 opacity-50"
                    />
                    <p>Your cart is empty</p>
                    <p className="text-sm">Add some delicious items!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-3 border-b last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                            <Image
                            className="rounded-xl h-16 w-20"
                              src={item.image}
                              alt="vegetable"
                              height={100}
                              width={100}
                            />
                        <div>
                          <h3 className="font-semibold text-gray-800  text-sm">{item.name}</h3>
                          <p className="text-orange-600 font-bold text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Minus className='text-gray-800 ' size={14} />
                        </button>
                        <span className="font-semibold w-6 text-orange-600  text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-orange-500 text-white p-1 rounded-full hover:bg-orange-600 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex justify-between text-gray-800 items-center text-lg font-bold mb-4">
                    <span>Total ({getTotalItems()} items)</span>
                    <span className="text-orange-600">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      setCurrentScreen("checkout");
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>

          {!sidebarOpen && getTotalItems() > 0 && (
            <div
              onClick={() => setSidebarOpen(true)}
              className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-l-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-30 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <ShoppingCart size={24} className="mb-2" />
                <div className="text-xs font-bold">{getTotalItems()}</div>
                <div className="text-xs font-bold">
                  ${getTotalPrice().toFixed(2)}
                </div>
              </div>
            </div>
          )}

          {getTotalItems() > 0 && (
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-30">
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-between"
              >
                <span>View Cart ({getTotalItems()} items)</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </button>
            </div>
          )}

          {cartDrawerOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] transform transition-transform duration-300 ease-in-out ${
                  cartDrawerOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white rounded-t-3xl">
                  <h2 className="text-xl font-bold text-gray-800">Your Order</h2>
                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[60vh]">
                  <div className="p-4">
                    {cart.length === 0 ? (
                      <div className="text-center text-gray-500 mt-8">
                        <ShoppingCart
                          size={48}
                          className="mx-auto mb-4 opacity-50"
                        />
                        <p>Your cart is empty</p>
                        <p className="text-sm">Add some delicious items!</p>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-3 border-b last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                                                        <Image
                            className="rounded-xl h-16 w-20"
                              src={item.image}
                              alt="vegetable"
                              height={100}
                              width={100}
                            />
                            <div>
                              <h3 className="font-semibold text-gray-800 text-sm">
                                {item.name}
                              </h3>
                              <p className="text-orange-600 font-bold text-sm">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                            >
                              <Minus className=' text-gray-800 ' size={14} />
                            </button>
                            <span className="font-semibold w-6 text-gray-800 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="bg-orange-500 text-white p-1 rounded-full hover:bg-orange-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {cart.length > 0 && (
                  <div className="p-4 border-t bg-gray-50 sticky bottom-0">
                    <div className="flex justify-between items-center text-lg text-gray-800 font-bold mb-4">
                      <span>Total ({getTotalItems()} items)</span>
                      <span className="text-orange-600">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setCartDrawerOpen(false);
                        setCurrentScreen("checkout");
                      }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentScreen === "checkout") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setCurrentScreen("menu")}
              className="mr-4 text-gray-600 hover:text-gray-800"
            >
              ← Back to Menu
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-6">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 flex justify-between text-gray-800 font-bold">
              <span>Total</span>
              <span className="text-orange-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Table Number *"
                value={orderDetails.tableNumber}
                onChange={(e) =>
                  handleInputChange("tableNumber", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="text"
                placeholder="Your Name *"
                value={orderDetails.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={orderDetails.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Email (Optional - for receipt)"
                value={orderDetails.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <button
            onClick={submitOrder}
            disabled={!orderDetails.tableNumber || !orderDetails.name}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all ${
              orderDetails.tableNumber && orderDetails.name
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Place Order - ${getTotalPrice().toFixed(2)}
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-8">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={40} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600">Thank you {orderDetails.name}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Clock className="text-orange-500 mr-2" size={20} />
              <span className="text-gray-700">Estimated prep time</span>
            </div>
            <div className="text-3xl font-bold text-orange-600">15-25 mins</div>
          </div>

          <div className="text-sm text-gray-600 mb-6 space-y-1">
            <p className="font-semibold">
              Order #12{Math.floor(Math.random() * 1000)}
            </p>
            <p>Table {orderDetails.tableNumber}</p>
            <p>
              {getTotalItems()} items • ${getTotalPrice().toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Order sent to kitchen • Receipt printed
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentScreen("landing");
              setCart([]);
              setOrderDetails({
                tableNumber: "",
                name: "",
                phone: "",
                email: "",
              });
              setCartDrawerOpen(false);
              setSidebarOpen(false);
              setSearchTerm("");
              setVisibleItems(20);
            }}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-2xl hover:bg-gray-300 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default RestaurantOrderingSystem;
