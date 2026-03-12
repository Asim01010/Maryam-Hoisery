// SpecialOffer.jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const SpecialOffer = () => {
  const [hoveredWomen, setHoveredWomen] = useState(false);
  const [hoveredMen, setHoveredMen] = useState(false);

  return (
    <div className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto md:px-0 px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Shop by Category
          </h2>
        </motion.div>

        {/* Split Container with Gap */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          {/* Women's Section */}   
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-500"
            onMouseEnter={() => setHoveredWomen(true)}
            onMouseLeave={() => setHoveredWomen(false)}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Women's Fashion"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* Content - Top Left */}
            <div className="absolute top-8 left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
              {/* First Heading */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-sm md:text-base font-light tracking-wider mb-2"
              >
                Complete your Look
              </motion.p>

              {/* Second Heading with Underline */}
              <div className="relative inline-block">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  Women's
                </motion.h2>

                {/* Underline Animation */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredWomen ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Description (optional) */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-sm mt-4 max-w-xs hidden md:block"
              >
                Discover the latest trends in women's fashion
              </motion.p>
            </div>

            {/* Button - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#333333",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#48CAB2] text-white font-semibold text-sm md:text-base  flex items-center gap-2 group/btn transition-colors duration-300 shadow-lg"
              >
                Discover Now!
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent" />
          </motion.div>

          {/* Men's Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 h-[500px] lg:h-[600px] overflow-hidden group  shadow-xl hover:shadow-2xl transition-shadow duration-500"
            onMouseEnter={() => setHoveredMen(true)}
            onMouseLeave={() => setHoveredMen(false)}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Men's Fashion"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            {/* Content - Top Left */}
            <div className="absolute top-8 left-8 md:top-10 md:left-10 lg:top-12 lg:left-12">
              {/* First Heading */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/80 text-sm md:text-base font-light tracking-wider mb-2"
              >
                Top Trending Style
              </motion.p>

              {/* Second Heading with Underline */}
              <div className="relative inline-block">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                  Men's
                </motion.h2>

                {/* Underline Animation */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredMen ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Description (optional) */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-sm mt-4 max-w-xs hidden md:block"
              >
                Explore our premium collection for men
              </motion.p>
            </div>

            {/* Button - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#333333",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#48CAB2] text-white font-semibold text-sm md:text-base  flex items-center gap-2 group/btn transition-colors duration-300 shadow-lg"
              >
                Discover Now!
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent" />
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Find your perfect style with our exclusive collections
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffer;
