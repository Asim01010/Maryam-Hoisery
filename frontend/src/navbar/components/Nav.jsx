import React, { useState, useEffect } from "react";
import {
  RiSearch2Line,
  RiArrowDownSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { SlUserFemale } from "react-icons/sl";
import { GiLoincloth } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  // Navigation menu items
  const navItems = [
    {
      name: "Home",
      hasDropdown: true,
      submenu: [
        "Home 1 - Fashion",
        "Home 2 - Minimal",
        "Home 3 - Modern",
        "Home 4 - Luxury",
        "Home 5 - Shop",
      ],
    },
    {
      name: "Shop",
      hasDropdown: true,
      submenu: [
        "All Products",
        "New Arrivals",
        "Best Sellers",
        "Sale Items",
        "Collection",
        "Accessories",
      ],
    },
    {
      name: "Pages",
      hasDropdown: true,
      submenu: [
        "About Us",
        "Contact Us",
        "FAQs",
        "Privacy Policy",
        "Terms & Conditions",
        "Shipping Info",
      ],
    },
    {
      name: "Blog",
      hasDropdown: true,
      submenu: [
        "Latest Posts",
        "Fashion Tips",
        "Style Guide",
        "Collection News",
      ],
    },
    {
      name: "Portfolio",
      hasDropdown: true,
      submenu: ["Our Work", "Lookbook", "Gallery"],
    },
    {
      name: "Women's",
      isMegaMenu: true,
      categories: [
        {
          name: "Clothing",
          items: [
            "Dresses",
            "Tops & Tees",
            "Sweaters",
            "Jackets & Coats",
            "Pants",
            "Shorts",
            "Skirts",
          ],
        },
        {
          name: "Shoes",
          items: ["Heels", "Flats", "Boots", "Sandals", "Sneakers"],
        },
        {
          name: "Accessories",
          items: ["Bags", "Jewelry", "Hats", "Belts", "Scarves"],
        },
      ],
    },
    {
      name: "Men's",
      isMegaMenu: true,
      categories: [
        {
          name: "Clothing",
          items: [
            "Shirts",
            "T-Shirts",
            "Sweaters",
            "Jackets",
            "Pants",
            "Shorts",
            "Suits",
          ],
        },
        {
          name: "Shoes",
          items: ["Sneakers", "Boots", "Loafers", "Sandals", "Formal Shoes"],
        },
        {
          name: "Accessories",
          items: ["Watches", "Belts", "Wallets", "Ties", "Sunglasses"],
        },
      ],
    },
  ];

  // Desktop icons
  const desktopIcons = [
    {
      icon: RiSearch2Line,
      name: "search",
      color: "#FF6B6B",
      hoverColor: "#FF5252",
    },
    {
      icon: SlUserFemale,
      name: "account",
      color: "#4ECDC4",
      hoverColor: "#3DBBB2",
    },
    {
      icon: GiLoincloth,
      name: "collections",
      color: "#95E06C",
      hoverColor: "#85D05C",
    },
    {
      icon: IoMdHeartEmpty,
      name: "wishlist",
      color: "#FFD166",
      hoverColor: "#FFC145",
    },
    {
      icon: FaShoppingBag,
      name: "cart",
      color: "#6C63FF",
      hoverColor: "#5A52E0",
    },
  ];

  // Mobile icons (only heart and cart)
  const mobileIcons = [
    {
      icon: IoMdHeartEmpty,
      name: "wishlist",
      color: "#FFD166",
    },
    {
      icon: FaShoppingBag,
      name: "cart",
      color: "#6C63FF",
    },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <div className="relative py-3 md:py-4 border-b border-gray-100 bg-white ">
        <div className="max-w-8xl mx-auto px-10">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Icon - Left Side */}
            <div className="md:hidden w-10">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Open menu"
              >
                <FiMenu className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Logo - Centered on Mobile, Left on Desktop */}
            <div className="">
              <div className="relative flex justify-start">
                <div className="relative">
                  <h1
                    className="text-4xl md:text-5xl font-bold"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      backgroundImage: 'url("/logo2.gif")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      lineHeight: "1",
                    }}
                  >
                    Maryam
                  </h1>
                  <span
                    className="absolute -bottom-3 right-1 text-[12px] md:text-[15px] text-gray-500 font-medium"
                    style={{ fontFamily: "'Fjalla One', sans-serif" }}
                  >
                    Hoisery
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - ALL items in one row */}
            <nav className="hidden md:flex flex-1 justify-center ml-8">
              <ul className="flex items-center gap-4 lg:gap-6">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="py-2 px-1 font-medium text-gray-700 hover:text-[#FF6B6B] transition-colors duration-200 text-sm lg:text-base whitespace-nowrap flex items-center gap-1">
                      {item.name}
                      {(item.hasDropdown || item.isMegaMenu) && (
                        <RiArrowDownSLine className="text-gray-400 group-hover:text-[#FF6B6B]" />
                      )}
                    </button>

                    {/* Regular Dropdown */}
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-lg py-2 min-w-[200px] z-50 border border-gray-100">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#FF6B6B] transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Mega Menu for Women's & Men's */}
                    {item.isMegaMenu && activeDropdown === item.name && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 bg-white shadow-2xl rounded-xl p-6 w-[800px] z-50 border border-gray-200">
                        <div className="grid grid-cols-3 gap-6">
                          {item.categories.map((category, idx) => (
                            <div key={idx}>
                              <h3 className="font-bold text-gray-800 mb-3 text-base border-b pb-2">
                                {category.name}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                      href="#"
                                      className="text-gray-600 hover:text-[#FF6B6B] transition-colors duration-200 block py-1 text-sm"
                                    >
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Featured Images */}
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((imgIdx) => (
                            <div
                              key={imgIdx}
                              className="relative overflow-hidden rounded-lg group"
                            >
                              <img
                                src={`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=250&h=150&fit=crop&crop=faces`}
                                alt={`Collection ${imgIdx}`}
                                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-3 left-3 text-white">
                                  <p className="font-semibold text-sm">
                                    Featured
                                  </p>
                                  <p className="text-xs">Shop Now →</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side - Icons */}
            <div className="flex items-center gap-3 md:flex-1 md:justify-end">
              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-3">
                {/* Search Input */}
                {isSearchOpen && (
                  <div className="animate-fadeIn">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] w-40"
                    />
                  </div>
                )}

                {/* Icons */}
                {desktopIcons.map((iconItem) => (
                  <button
                    key={iconItem.name}
                    className="relative group"
                    onClick={() =>
                      iconItem.name === "search" &&
                      setIsSearchOpen(!isSearchOpen)
                    }
                  >
                    <div
                      className="p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${iconItem.color}15`,
                        color: iconItem.color,
                      }}
                    >
                      <iconItem.icon className="w-5 h-5" />
                    </div>

                    {/* Badges */}
                    {iconItem.name === "cart" && (
                      <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        3
                      </span>
                    )}
                    {iconItem.name === "wishlist" && (
                      <span className="absolute -top-1 -right-1 bg-[#FFD166] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        5
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Icons */}
              <div className="flex md:hidden items-center gap-3">
                {mobileIcons.map((iconItem) => (
                  <button
                    key={iconItem.name}
                    className="relative p-2"
                    style={{ color: iconItem.color }}
                  >
                    <iconItem.icon className="w-5 h-5" />
                    {/* Badges */}
                    {iconItem.name === "cart" && (
                      <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        3
                      </span>
                    )}
                    {iconItem.name === "wishlist" && (
                      <span className="absolute -top-1 -right-1 bg-[#FFD166] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                        5
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Main Sidebar */}
          <div
            className={`fixed left-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl md:hidden transform ${activeMobileSubmenu ? "-translate-x-full" : "translate-x-0"} transition-transform duration-300`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <div className="relative">
                  <h1
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      backgroundImage: 'url("/logo2.gif")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Maryam
                  </h1>
                  <span
                    className="absolute -bottom-1.5 right-0 text-[9px] text-gray-500 font-medium"
                    style={{ fontFamily: "'Fjalla One', sans-serif" }}
                  >
                    Hoisery
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <FiX className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 ">
                <nav className="py-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100">
                      <button
                        onClick={() => {
                          if (item.hasDropdown || item.isMegaMenu) {
                            setActiveMobileSubmenu(item.name);
                          }
                        }}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                      >
                        <span className="font-medium">{item.name}</span>
                        {(item.hasDropdown || item.isMegaMenu) && (
                          <RiArrowRightSLine className="text-gray-400" />
                        )}
                      </button>
                    </div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="p-4 space-y-4 border-t">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                    />
                    <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg">
                    <SlUserFemale className="text-[#4ECDC4]" />
                    <span className="font-medium">My Account</span>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg">
                    <GiLoincloth className="text-[#95E06C]" />
                    <span className="font-medium">Collections</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submenu Sidebar */}
          {navItems.map(
            (item) =>
              activeMobileSubmenu === item.name && (
                <div
                  key={item.name}
                  className="fixed left-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl md:hidden transform translate-x-0 transition-transform duration-300"
                >
                  <div className="h-full flex flex-col">
                    {/* Submenu Header */}
                    <div className="flex items-center p-4 border-b">
                      <button
                        onClick={() => setActiveMobileSubmenu(null)}
                        className="p-2 hover:bg-gray-100 rounded-full mr-2"
                        aria-label="Go back"
                      >
                        <RiArrowRightSLine className="w-5 h-5 text-gray-700 rotate-180" />
                      </button>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="ml-auto p-2 hover:bg-gray-100 rounded-full"
                        aria-label="Close menu"
                      >
                        <FiX className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>

                    {/* Submenu Content */}
                    <div className="flex-1 overflow-y-auto py-4">
                      {item.hasDropdown && (
                        <div className="space-y-1">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block p-4 hover:bg-gray-50 border-b border-gray-100"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}

                      {item.isMegaMenu && (
                        <div className="space-y-6 p-4">
                          {item.categories.map((category, idx) => (
                            <div key={idx}>
                              <h3 className="font-bold text-gray-800 mb-3 text-base border-b pb-2">
                                {category.name}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                      href="#"
                                      className="text-gray-600 hover:text-[#FF6B6B] block py-2 text-sm"
                                    >
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ),
          )}
        </>
      )}

      {/* Add CSS for animations and prevent scroll */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        body {
          overflow-x: hidden;
          max-width: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Nav;
