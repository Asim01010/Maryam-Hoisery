// PopularCollections.jsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const PopularCollections = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Collection data
  const collections = {
    left: {
      id: 1,
      title: "Urban Streetwear",
      description:
        "Modern urban fashion with street aesthetics for the contemporary individual.",
      category: "COLLECTION",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    rightTopLeft: {
      id: 2,
      title: "Summer Vibes",
      description: "Lightweight summer collection perfect for sunny days.",
      category: "SEASONAL",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w-1200&q=80",
    },
    rightTopRight: {
      id: 3,
      title: "Winter Luxury",
      description: "Premium winter essentials for ultimate comfort.",
      category: "PREMIUM",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1a40ed0ada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    rightBottom: {
      id: 4,
      title: "Athletic Wear",
      description: "Performance-focused activewear for all sports activities.",
      category: "ACTIVEWEAR",
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Popular Collections
            </h2>
            <p className="text-gray-600 text-lg">
              Visit our shop to see amazing creations from our designers.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit"
          >
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Collections Grid - Full Width Container */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-1">
          {/* Left Side - Full Height Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[700px] overflow-hidden group"
            onMouseEnter={() => setHoveredImage(collections.left.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={collections.left.image}
              alt={collections.left.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content - Top Left Corner */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 right-6 lg:right-8">
              <div className="flex flex-col items-start">
                {/* Category */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2"
                >
                  {collections.left.category}
                </motion.span>

                {/* Title with Underline Animation */}
                <div className="relative">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {collections.left.title}
                  </h3>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredImage === collections.left.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Description - Appears on hover */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredImage === collections.left.id ? 1 : 0,
                    y: hoveredImage === collections.left.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-white/80 text-base lg:text-lg max-w-md mt-2"
                >
                  {collections.left.description}
                </motion.p>
              </div>
            </div>

            {/* View Button - Bottom Left */}
            <motion.div
              className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="grid grid-rows-2 gap-1">
            {/* Top Row - Two Columns */}
            <div className="grid grid-cols-2 gap-1">
              {/* Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[300px] lg:h-[350px] overflow-hidden group"
                onMouseEnter={() =>
                  setHoveredImage(collections.rightTopLeft.id)
                }
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={collections.rightTopLeft.image}
                  alt={collections.rightTopLeft.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content - Top Left Corner */}
                <div className="absolute top-5 left-5 right-5">
                  <div className="flex flex-col items-start">
                    <span className="text-white/80 text-xs font-medium tracking-wider uppercase mb-1">
                      {collections.rightTopLeft.category}
                    </span>

                    <div className="relative">
                      <h3 className="text-lg lg:text-xl font-bold text-white">
                        {collections.rightTopLeft.title}
                      </h3>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-white origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            hoveredImage === collections.rightTopLeft.id
                              ? 1
                              : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{
                        opacity:
                          hoveredImage === collections.rightTopLeft.id ? 1 : 0,
                        y: hoveredImage === collections.rightTopLeft.id ? 0 : 5,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-white/80 text-sm mt-1"
                    >
                      {collections.rightTopLeft.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative h-[300px] lg:h-[350px] overflow-hidden group"
                onMouseEnter={() =>
                  setHoveredImage(collections.rightTopRight.id)
                }
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={collections.rightTopRight.image}
                  alt={collections.rightTopRight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content - Top Left Corner */}
                <div className="absolute top-5 left-5 right-5">
                  <div className="flex flex-col items-start">
                    <span className="text-white/80 text-xs font-medium tracking-wider uppercase mb-1">
                      {collections.rightTopRight.category}
                    </span>

                    <div className="relative">
                      <h3 className="text-lg lg:text-xl font-bold text-white">
                        {collections.rightTopRight.title}
                      </h3>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-white origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            hoveredImage === collections.rightTopRight.id
                              ? 1
                              : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{
                        opacity:
                          hoveredImage === collections.rightTopRight.id ? 1 : 0,
                        y:
                          hoveredImage === collections.rightTopRight.id ? 0 : 5,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-white/80 text-sm mt-1"
                    >
                      {collections.rightTopRight.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[300px] lg:h-[350px] overflow-hidden group"
              onMouseEnter={() => setHoveredImage(collections.rightBottom.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={collections.rightBottom.image}
                alt={collections.rightBottom.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content - Top Left Corner */}
              <div className="absolute top-6 left-6 right-6">
                <div className="flex flex-col items-start">
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase mb-1">
                    {collections.rightBottom.category}
                  </span>

                  <div className="relative">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {collections.rightBottom.title}
                    </h3>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX:
                          hoveredImage === collections.rightBottom.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity:
                        hoveredImage === collections.rightBottom.id ? 1 : 0,
                      y: hoveredImage === collections.rightBottom.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-white/80 text-base mt-2 max-w-lg"
                  >
                    {collections.rightBottom.description}
                  </motion.p>
                </div>
              </div>

              {/* View Button */}
              <motion.div
                className="absolute bottom-6 left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 text-sm"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollections;
