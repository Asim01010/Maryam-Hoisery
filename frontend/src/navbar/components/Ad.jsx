import React, { useState, useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Ad = () => {
  const [hideAd, setHideAd] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);

  const scrollContainerRef = useRef(null);
  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, color: "#1877F2" },
    { name: "Twitter", icon: FaTwitter, color: "#1DA1F2" },
    { name: "Instagram", icon: FaInstagram, color: "#E4405F" },
  ];

  const offers = [
    {
      id: 1,
      highlight: "50% off",
      text: "all new collection",
      link: "Discover Now!",
      color: "#FF6B6B",
    },
    {
      id: 2,
      highlight: "Take 30% off",
      text: "When you spend $99 or more with code 'YANKA'",
      link: "Discover Now!",
      color: "#4ECDC4",
    },
    {
      id: 3,
      highlight: "Free 2 Days",
      text: "standard shipping on order +255$",
      link: "More Details",
      color: "#95E06C",
    },
  ];

  // Auto-scroll effect for offers
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused || isDragging) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let animationFrameId;
    let scrollPos = 0;
    const speed = window.innerWidth < 768 ? 0.8 : 1; // Slower on mobile

    const animateScroll = () => {
      scrollPos += speed;
      if (scrollPos >= scrollWidth - clientWidth) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isDragging]);

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);

    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setIsPaused(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // Handle mobile click for tooltip
  const handleMobileTooltipClick = () => {
    if (window.innerWidth < 768) {
      setShowMobileTooltip(!showMobileTooltip);
    }
  };

  return (
    <>
      {/* First Ad Section */}
      <div
        className={`relative bg-gradient-to-r from-[#FF7451] to-[#FF9575] p-1 md:p-2 flex items-center w-full text-white ${hideAd ? "hidden" : "block"}`}
      >
        {/* Center Content - Mobile responsive */}
        <div className="flex-1 flex justify-center px-2">
          <div className="text-sm md:text-base lg:text-xl text-center flex flex-col md:flex-row items-center  md:gap-2 relative">
            <span className="font-bold whitespace-nowrap">
              ENJOY AN EXTRA 40% off
            </span>
            <span className="whitespace-nowrap">select sales styles</span>

            {/* More details with animated underline - Responsive */}
            <div className="relative group/moredetails mt-1 md:mt-0">
              <button
                className="relative font-bold cursor-pointer inline-block"
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setActiveTooltip("moredetails")
                }
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setActiveTooltip(null)
                }
                onClick={handleMobileTooltipClick}
              >
                <span className="relative inline-block px-2 md:px-0 md:py-0">
                  <span className="relative z-10 text-sm md:text-base">
                    More details
                  </span>
                  {/* Underline animation */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-500 ${
                      activeTooltip === "moredetails" || showMobileTooltip
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                  {/* Background highlight on hover */}
                  <span
                    className={`absolute inset-0 bg-white/10 rounded transition-all duration-300 ${
                      activeTooltip === "moredetails" || showMobileTooltip
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-95"
                    }`}
                  />
                </span>
              </button>

              {/* Desktop Tooltip */}
              <div
                className={`hidden md:block absolute left-1/2 top-full -translate-x-1/2 mt-3 z-50
                                    transition-all duration-300 ease-out ${
                                      activeTooltip === "moredetails"
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 translate-y-2 invisible"
                                    }`}
              >
                {/* Arrow */}
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800 mx-auto"></div>

                {/* Tooltip box */}
                <div className="w-[280px] bg-gray-800 text-white text-sm p-4 rounded-lg shadow-xl">
                  This offer is valid from 3:15 a.m. PT on January 23, 2019, to
                  11:59 p.m. PT on February 19, 2019, on select sale styles.
                  Discount will be automatically reflected in cart. This offer
                  is not valid on previously purchased merchandise. This offer
                  has no cash value. This offer cannot be combined with any
                  other offer, except for free shipping.
                </div>
              </div>

              {/* Mobile Tooltip - Full width expandable */}
              <div
                className={`md:hidden w-full mt-2 overflow-hidden transition-all duration-300 ${
                  showMobileTooltip
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm">
                  This offer is valid from 3:15 a.m. PT on January 23, 2019, to
                  11:59 p.m. PT on February 19, 2019, on select sale styles.
                  Discount will be automatically reflected in cart. This offer
                  is not valid on previously purchased merchandise. This offer
                  has no cash value. This offer cannot be combined with any
                  other offer, except for free shipping.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Icon */}
        <button
          onClick={() => setHideAd(true)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-1 rounded-full transition-all duration-300 cursor-pointer"
        >
          <RxCross1 size={18} className="md:w-5 md:h-5" />
        </button>
      </div>

      {/* Second Ad Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 overflow-x-hidden">
        {/* Contact Info - Visible on all screens */}
        <div className="flex items-center gap-2 text-xs md:text-sm w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
          <span className="tracking-tighter text-gray-500">Call Us:</span>
          <span className="font-bold text-gray-800">1–234–5678901</span>
        </div>

        {/* Scrolling Offers - Takes full width on mobile */}
        <div
          ref={scrollContainerRef}
          className="flex flex-1 mx-0 md:mx-8 overflow-hidden relative w-full md:w-auto"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div
            className="flex gap-4 md:gap-8 flex-nowrap"
            style={{
              padding: window.innerWidth < 768 ? "0 2rem" : "0 4rem",
              pointerEvents: isDragging ? "none" : "auto",
            }}
          >
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm whitespace-nowrap flex-shrink-0 relative group/offer min-w-max"
                onMouseEnter={() =>
                  window.innerWidth >= 768 &&
                  setActiveTooltip(`offer-${offer.id}`)
                }
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setActiveTooltip(null)
                }
              >
                <small
                  className="font-bold transition-all duration-300"
                  style={{ color: offer.color }}
                >
                  {offer.highlight}
                </small>
                <small className="text-gray-600 hidden sm:inline">
                  {offer.text}
                </small>
                <small className="text-gray-600 sm:hidden max-w-[80px] truncate">
                  {offer.text.split(" ").slice(0, 2).join(" ")}...
                </small>
                <small
                  className="relative cursor-pointer transition-all duration-300 hover:opacity-80 ml-1"
                  style={{ color: offer.color }}
                >
                  <span className="relative inline-block text-xs md:text-sm">
                    {window.innerWidth < 640 ? "..." : offer.link}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                        activeTooltip === `offer-${offer.id}`
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }`}
                      style={{ backgroundColor: offer.color }}
                    />
                  </span>
                </small>
              </div>
            ))}

            {/* Duplicate content for seamless scrolling */}
            {offers.map((offer) => (
              <div
                key={`dup-${offer.id}`}
                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm whitespace-nowrap flex-shrink-0 min-w-max"
              >
                <small className="font-bold" style={{ color: offer.color }}>
                  {offer.highlight}
                </small>
                <small className="text-gray-600 hidden sm:inline">
                  {offer.text}
                </small>
                <small className="text-gray-600 sm:hidden max-w-[80px] truncate">
                  {offer.text.split(" ").slice(0, 2).join(" ")}...
                </small>
                <small
                  style={{ color: offer.color }}
                  className="ml-1 text-xs md:text-sm"
                >
                  {window.innerWidth < 640 ? "..." : offer.link}
                </small>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Social Media Links - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href="#"
              className="relative group/social"
              onMouseEnter={() => setActiveTooltip(`social-${social.name}`)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div
                className="p-2 rounded-full transition-all duration-300 group-hover/social:scale-110 group-hover/social:shadow-lg"
                style={{
                  backgroundColor: social.color + "15",
                  color: social.color,
                }}
              >
                <social.icon size={16} />
              </div>

              {/* Animated underline for social links */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-500 group-hover/social:w-4/5"
                style={{ backgroundColor: social.color }}
              />

              {/* Tooltip */}
              <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap transition-all duration-300 ${
                  activeTooltip === `social-${social.name}`
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible"
                }`}
              >
                Follow us on {social.name}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Social Icons - Simple horizontal on very small screens if needed */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-2">
          <span className="text-xs text-gray-500">Follow us:</span>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href="#"
              className="p-1 rounded-full"
              style={{ color: social.color }}
            >
              <social.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ad;
