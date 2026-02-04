// Hero.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoPlayRef = useRef(null);

  // Navbar height - adjust this to match your navbar
  const NAVBAR_HEIGHT = 181; // 181px from your measurement

  const slides = [
    {
      id: 1,
      title: "Urban Collection",
      description:
        "Redefine street style with our premium urban wear collection. Designed for comfort and statement.",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-blue-900/70 via-blue-900/40 to-black/70",
      textColor: "text-blue-50",
      cta: "Shop Now",
      descriptionDirection: "left",
      bgColor: "bg-gradient-to-br from-blue-900 via-blue-800 to-black",
    },
    {
      id: 2,
      title: "Summer Essentials",
      description:
        "Stay cool and stylish this summer with our breathable fabrics and vibrant designs.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      color: "from-orange-900/70 via-orange-900/40 to-black/70",
      textColor: "text-orange-50",
      cta: "Explore",
      descriptionDirection: "top",
      bgColor: "bg-gradient-to-br from-orange-900 via-orange-800 to-black",
    },
    {
      id: 3,
      title: "Winter Luxury",
      description:
        "Embrace the cold in style with our premium wool and cashmere winter collection.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "from-gray-900/70 via-gray-900/40 to-black/70",
      textColor: "text-gray-50",
      cta: "Discover",
      descriptionDirection: "right",
      bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    },
  ];

  // Directions for description animation
  const directionVariants = {
    left: { x: -150, opacity: 0 },
    right: { x: 150, opacity: 0 },
    top: { y: -150, opacity: 0 },
    bottom: { y: 150, opacity: 0 },
  };

  // Slower transition settings
  const SLIDE_DURATION = 7000; // 7 seconds for slower sliding
  const TRANSITION_DURATION = 0.8; // 0.8 seconds for transitions

  // Auto slide with slower timing
  useEffect(() => {
    if (!isPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [slides.length, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Reset autoplay timer on manual navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
      }
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Reset autoplay timer on manual navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
      }
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset autoplay timer on manual navigation
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      if (isPlaying) {
        autoPlayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
      }
    }
  };

  // Touch/swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30; // Reduced for easier swiping

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Calculate height based on navbar
  const heroHeight = `calc(100vh - ${NAVBAR_HEIGHT}px)`;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: heroHeight }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm">Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Background Images with Slower Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: TRANSITION_DURATION,
              ease: [0.25, 0.46, 0.45, 0.94], // Custom ease for smoother transition
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: TRANSITION_DURATION * 0.7,
              ease: "easeIn",
            },
          }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Enhanced Gradient Overlay with multiple layers */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with enhanced design */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-lg transition-all duration-300 group shadow-2xl"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-lg transition-all duration-300 group shadow-2xl"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Content with enhanced animations */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={
                directionVariants[slides[currentSlide].descriptionDirection]
              }
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  mass: 1.2,
                  delay: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className={`max-w-2xl ${slides[currentSlide].textColor}`}
            >
              {/* Subtle Badge with enhanced animation */}
              <motion.span
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="inline-block px-6 py-2.5 mb-8 text-sm font-semibold bg-white/25 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  New Collection
                </span>
              </motion.span>

              {/* Title with letter-by-letter animation */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              >
                {slides[currentSlide].title.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.03,
                      duration: 0.5,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Description with enhanced animation */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-lg sm:text-xl md:text-2xl mb-10 opacity-95 max-w-xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced play/pause button */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.9,
          duration: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-2">
          {slides[currentSlide].cta}
          <ArrowRight className="w-5 h-5" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      </motion.button>

      {/* Enhanced slide counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 text-sm font-medium hidden md:flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full bg-black/30"
      >
        <span className="font-bold text-lg">{currentSlide + 1}</span>
        <span className="text-white/60">/</span>
        <span className="text-white/60">{slides.length}</span>
      </motion.div>

      {/* Enhanced swipe instructions for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/70 text-xs flex items-center gap-2 md:hidden backdrop-blur-sm px-4 py-2 rounded-full bg-black/30"
      >
        <span className="flex items-center gap-1">
          <span className="w-4 h-4 border-t-2 border-l-2 border-white rotate-[-45deg]"></span>
          Swipe
          <span className="w-4 h-4 border-t-2 border-r-2 border-white rotate-45"></span>
        </span>
      </motion.div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="focus:outline-none group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Outer glow effect */}
            <div className="absolute -inset-2 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <motion.div
              className={`h-1.5 rounded-full bg-white/50 overflow-hidden backdrop-blur-lg relative ${
                currentSlide === index ? "shadow-lg shadow-white/20" : ""
              }`}
              initial={false}
              animate={{
                width: currentSlide === index ? "64px" : "24px",
                backgroundColor:
                  currentSlide === index
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(255, 255, 255, 0.4)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.2 }}
            >
              {/* Progress indicator for active slide */}
              {currentSlide === index && (
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-white to-white/80"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: SLIDE_DURATION / 1000,
                    ease: "linear",
                  }}
                  key={currentSlide}
                  onAnimationComplete={() => {
                    // Animation completes naturally with autoplay
                  }}
                />
              )}
            </motion.div>
          </button>
        ))}
      </div>

      {/* Enhanced Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute top-8 right-4 z-20 flex flex-col gap-3"
      >
        {["Instagram", "Twitter", "Pinterest"].map((social, index) => (
          <motion.a
            key={social}
            href="#"
            className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 hover:translate-x-[-4px] transition-all duration-300 group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-6 h-[1px] bg-white/50 group-hover:bg-white transition-all duration-300 group-hover:w-8"></span>
            {social}
          </motion.a>
        ))}
      </motion.div>

      {/* Subtle floating elements for depth */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default Hero;
