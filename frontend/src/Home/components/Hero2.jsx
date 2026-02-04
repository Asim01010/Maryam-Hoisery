// Hero2.jsx - Enhanced with always-visible descriptions and hover button overflow
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Hero2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoPlayRef = useRef(null);

  // Slides with 3 images each
  const slides = [
    {
      id: 1,
      images: [
        {
          id: 1,
          category: "STREETWEAR",
          title: "Urban Hoodie",
          description: "Premium cotton with modern urban design",
          image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 2,
          category: "CASUAL",
          title: "Comfort Joggers",
          description: "Perfect for everyday wear with tapered fit",
          image:
            "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 3,
          category: "FOOTWEAR",
          title: "Limited Sneakers",
          description: "Exclusive design with premium materials",
          image:
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          id: 1,
          category: "SUMMER",
          title: "Linen Shirt",
          description: "Lightweight and breathable for hot days",
          image:
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 2,
          category: "BEACH",
          title: "Summer Shorts",
          description: "Perfect for sunny days with multiple pockets",
          image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 3,
          category: "ACCESSORIES",
          title: "Beach Sandals",
          description: "Comfortable waterproof sandals for summer",
          image:
            "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          id: 1,
          category: "WINTER",
          title: "Cashmere Sweater",
          description: "100% cashmere for ultimate warmth and comfort",
          image:
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 2,
          category: "OUTERWEAR",
          title: "Wool Coat",
          description: "Premium wool overcoat for winter elegance",
          image:
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
        {
          id: 3,
          category: "ACCESSORIES",
          title: "Leather Gloves",
          description: "Genuine leather for winter protection",
          image:
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  ];

  // Auto slide every 8 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const allImages = slides.flatMap((slide) =>
        slide.images.map((img) => img.image),
      );
      const promises = allImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <div className="relative w-full h-screen md:h-[70vh] lg:h-[80vh] bg-black overflow-hidden">
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Slides Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Three Images Grid - With Small Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full gap-2 md:gap-4 lg:gap-6 p-2 md:p-4 lg:p-6">
            {slides[currentSlide].images.map((img, index) => (
              <motion.div
                key={img.id}
                className="relative h-full w-full overflow-hidden group"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: "easeOut",
                  },
                }}
              >
                {/* Image Container */}
                <div className="absolute inset-0">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>
                </div>

                {/* Always Visible Description */}
                <div className="absolute bottom-10 text-center justify-center left-0 right-0 p-4 md:p-6 lg:p-8 text-white z-10">
                  {/* Small Category Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <p className="text-xs md:text-sm font-medium tracking-widest text-white/80 mb-1 md:mb-2">
                      {img.category}
                    </p>
                  </motion.div>

                  {/* Big Title Text */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2"
                  >
                    {img.title}
                  </motion.h3>

                  {/* Small Detail Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    className="text-xs md:text-sm font-light text-white/70 max-w-xs translate-x-15"
                  >
                    {img.description}
                  </motion.p>
                </div>

                {/* Hover Button - Overflows from bottom */}
                <motion.div
                  className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-visible"
                  initial={false}
                  animate={{}}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 md:px-4 py-3 md:py-2 bg-white text-black font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 text-xs whitespace-nowrap"
                  >
                    Shop Now
                    <ArrowRight className="w-4 h-4 md:w-3 md:h-3" />
                  </motion.button>
                </motion.div>

                {/* Subtle Border */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-all duration-500"></div>

                {/* Hover Overlay Enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Large and Clean */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md transition-all duration-300 shadow-2xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md transition-all duration-300 shadow-2xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {/* Slide Indicators - Minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              resetAutoPlay();
            }}
            className="focus:outline-none group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 group-hover:bg-white/80 ${
                currentSlide === index ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            >
              {currentSlide === index && (
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-white to-white/80"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                  }}
                  key={currentSlide}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 text-white/60 text-sm hidden md:block">
        <span className="font-bold">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </div>
    </div>
  );
};

export default Hero2;
