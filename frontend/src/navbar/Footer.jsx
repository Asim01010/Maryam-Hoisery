// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const Info = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Shipping and Returns" },
    { id: 3, name: "Contact Us" },
    { id: 4, name: "404 Page" },
    { id: 5, name: "Maintenance" },
  ];

  const OurPolicies = [
    { id: 1, name: "FAQs" },
    { id: 2, name: "Privacy Policy" },
    { id: 3, name: "Cookie Policy" },
    { id: 4, name: "Terms and Conditions" },
  ];

  const Order = [
    { id: 1, name: "My Account" },
    { id: 2, name: "View Cart" },
    { id: 3, name: "Wishlist" },
    { id: 4, name: "Compare" },
  ];

  const Store = [
    {
      id: 1,
      name: "2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      id: 2,
      name: "Call Us: 1-234-5678901 Mon-Sun: 9:00am - 9:00pm",
      icon: <Phone className="w-4 h-4" />,
    },
  ];

  const socialLinks = [
    { id: 1, icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
    { id: 2, icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
    { id: 3, icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
    { id: 4, icon: <Youtube className="w-5 h-5" />, name: "Youtube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-[#F7F8FA] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          {/* Information Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Information
            </h3>
            <ul className="space-y-3">
              {Info.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#53CAB2] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Our Policies
            </h3>
            <ul className="space-y-3">
              {OurPolicies.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#53CAB2] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Order & Account Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">My Account</h3>
            <ul className="space-y-3">
              {Order.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#53CAB2] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Store Info Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter!
              </h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 focus:border-[#53CAB2] outline-none transition-colors text-sm rounded-lg"
                />
                <button className="absolute right-1 top-1 p-2 bg-[#53CAB2] text-white rounded-lg hover:bg-[#3da890] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                By entering your email, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>

            {/* Store Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Store Information
              </h3>
              <ul className="space-y-3">
                {Store.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-2 text-gray-600 text-sm"
                  >
                    <span className="text-[#53CAB2] mt-0.5">{item.icon}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white rounded-lg text-gray-600 hover:text-[#53CAB2] hover:shadow-md transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Your Store. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#53CAB2] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#53CAB2] transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#53CAB2] transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
