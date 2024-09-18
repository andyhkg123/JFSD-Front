import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img
            className="h-12 w-12"
            src="https://cdn-icons-png.flaticon.com/512/14480/14480981.png"
            alt="Scroll to Top"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
