// SpecialOffer.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Repeat,
  Eye,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

const SpecialOffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredPrice, setHoveredPrice] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const autoPlayRef = useRef(null);

  // Timer deadline (7 days from now) for each product
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);

  // Timer calculation
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Special offer data with two images per item
  const offers = [
    {
      id: 1,
      brand: "Nike",
      name: "Air Max Pulse",
      price: "$189.99",
      originalPrice: "$249.99",
      discount: "25% OFF",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 2,
      brand: "Adidas",
      name: "Ultraboost 22",
      price: "$159.99",
      originalPrice: "$199.99",
      discount: "20% OFF",
      images: [
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 3,
      brand: "Puma",
      name: "RS-X3 Puzzle",
      price: "$129.99",
      originalPrice: "$169.99",
      discount: "24% OFF",
      images: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 4,
      brand: "New Balance",
      name: "574 Core",
      price: "$99.99",
      originalPrice: "$129.99",
      discount: "23% OFF",
      images: [
        "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 5,
      brand: "Reebok",
      name: "Classic Leather",
      price: "$89.99",
      originalPrice: "$119.99",
      discount: "25% OFF",
      images: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 6,
      brand: "Vans",
      name: "Old Skool",
      price: "$79.99",
      originalPrice: "$99.99",
      discount: "20% OFF",
      images: [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 7,
      brand: "Converse",
      name: "Chuck Taylor",
      price: "$69.99",
      originalPrice: "$89.99",
      discount: "22% OFF",
      images: [
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: 8,
      brand: "Under Armour",
      name: "HOVR Phantom",
      price: "$139.99",
      originalPrice: "$179.99",
      discount: "22% OFF",
      images: [
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ];

  // Determine items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide(newItemsPerSlide);
      setCurrentSlide(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(offers.length / itemsPerSlide);

  // Auto slide - 5 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 9000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
  };

  // Get current items for the slide
  const getCurrentItems = () => {
    const start = currentSlide * itemsPerSlide;
    return offers.slice(start, start + itemsPerSlide);
  };

  // Format numbers with leading zeros
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const currentItems = getCurrentItems();

  // Grid cols class based on itemsPerSlide
  const gridColsClass =
    itemsPerSlide === 1
      ? "grid-cols-1"
      : itemsPerSlide === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <div className="w-full py-16 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grab these exclusive deals before they're gone!
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#48CAB2] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#48CAB2] transition-colors" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`grid ${gridColsClass} gap-6`}
              >
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                      setHoveredIcon(null);
                      setHoveredPrice(null);
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-200 mb-4 h-[350px] md:h-[400px] lg:h-[450px]">
                      {/* Discount Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-500 text-white text-sm font-semibold">
                        {item.discount}
                      </div>

                      {/* Top Right Icons */}
                      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                        {/* Wishlist */}
                        <div className="relative">
                          <motion.button
                            onMouseEnter={() => setHoveredIcon("wishlist")}
                            onMouseLeave={() => setHoveredIcon(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                          >
                            <Heart
                              className={`w-4 h-4 transition-colors ${
                                hoveredIcon === "wishlist"
                                  ? "text-[#48CAB2]"
                                  : "text-gray-600"
                              }`}
                            />
                          </motion.button>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredIcon === "wishlist" && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded"
                              >
                                Add to wishlist
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Compare */}
                        <div className="relative">
                          <motion.button
                            onMouseEnter={() => setHoveredIcon("compare")}
                            onMouseLeave={() => setHoveredIcon(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                          >
                            <Repeat
                              className={`w-4 h-4 transition-colors ${
                                hoveredIcon === "compare"
                                  ? "text-[#48CAB2]"
                                  : "text-gray-600"
                              }`}
                            />
                          </motion.button>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredIcon === "compare" && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded"
                              >
                                Add to compare
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Quick View */}
                        <div className="relative">
                          <motion.button
                            onMouseEnter={() => setHoveredIcon("quickview")}
                            onMouseLeave={() => setHoveredIcon(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                          >
                            <Eye
                              className={`w-4 h-4 transition-colors ${
                                hoveredIcon === "quickview"
                                  ? "text-[#48CAB2]"
                                  : "text-gray-600"
                              }`}
                            />
                          </motion.button>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredIcon === "quickview" && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs py-1 px-2 rounded"
                              >
                                Quick view
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Images */}
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={hoveredItem === item.id ? "hover" : "default"}
                          src={
                            hoveredItem === item.id
                              ? item.images[1]
                              : item.images[0]
                          }
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>

                      {/* Timer on Bottom of Image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="bg-black/70 backdrop-blur-sm p-3">
                          <p className="text-white/80 text-xs mb-2 text-center">
                            Offer ends in
                          </p>
                          <div className="flex justify-center gap-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">
                                {formatNumber(timeLeft.days || 0)}
                              </div>
                              <div className="text-[10px] text-white/60">
                                Days
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">
                                {formatNumber(timeLeft.hours || 0)}
                              </div>
                              <div className="text-[10px] text-white/60">
                                Hrs
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">
                                {formatNumber(timeLeft.minutes || 0)}
                              </div>
                              <div className="text-[10px] text-white/60">
                                Min
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">
                                {formatNumber(timeLeft.seconds || 0)}
                              </div>
                              <div className="text-[10px] text-white/60">
                                Sec
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-2">
                      {/* Brand */}
                      <p className="text-sm text-gray-500 mb-1">{item.brand}</p>

                      {/* Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>

                      {/* Price with Hover Effect */}
                      <div
                        className="relative py-2"
                        onMouseEnter={() => setHoveredPrice(item.id)}
                        onMouseLeave={() => setHoveredPrice(null)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            {item.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        </div>

                        {/* Add to Cart Button (Appears on Price Hover) */}
                        <AnimatePresence>
                          {hoveredPrice === item.id && (
                            <motion.button
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="absolute top-0 left-0 flex items-center gap-2 px-4 py-2 bg-[#48CAB2] text-white rounded-lg hover:bg-[#3da890] transition-colors"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              <Plus className="w-3 h-3" />
                              <span className="text-sm font-medium">
                                Add to Cart
                              </span>
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slim Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none"
              >
                <motion.div
                  className="h-1 bg-gray-300 rounded-full overflow-hidden"
                  initial={false}
                  animate={{
                    width: currentSlide === index ? 40 : 20,
                    backgroundColor:
                      currentSlide === index ? "#48CAB2" : "#e5e7eb",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {currentSlide === index && (
                    <motion.div
                      className="h-full bg-[#48CAB2]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={currentSlide}
                    />
                  )}
                </motion.div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
