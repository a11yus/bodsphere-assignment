"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Bodsphere has made Yoga accessible and affordable for everyone. So grateful!",
    author: "Alejandra Martinez",
    location: "Argentina",
  },
  {
    text: "Super happy to be a part of the Bodsphere Revolution!",
    author: "Katerina Smith",
    location: "United States of America",
  },
  {
    text: "Bodsphere's Platform is a gift for this World",
    author: "Diego Rodriguez",
    location: "Spain",
  },
  {
    text: "Bodsphere Accreditation, Community, etc - So powerful!",
    author: "Susana Fernandes",
    location: "Thailand",
  },
  {
    text: "Bodsphere Accreditation, Community, etc - So powerful!",
    author: "Susana Fernandes",
    location: "Thailand",
  },
  {
    text: "Bodsphere Accreditation, Community, etc - So powerful!",
    author: "Susana Fernandes",
    location: "Thailand",
  },
];

export default function InstructorCarousel() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollTo = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount =
        direction === "left" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(
        container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
      );
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAtEnd) {
        scrollTo("right");
      } else {
        // Reset to start when reached the end
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isAtEnd]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scrollTo("left")}
          disabled={isAtStart}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg ${
            isAtStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scrollTo("right")}
          disabled={isAtEnd}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg ${
            isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar flex gap-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonal, index) => (
            <div
              key={index}
              className="h-1/4 w-1/4 flex-shrink-0 snap-center bg-gray-200 p-3 rounded-xl"
            >
              <div className="rounded-lg overflow-hidden h-32">
                <div className="mb-2">
                  <Quote className="w-6 h-6 text-gray-400" />
                </div>
                <blockquote className="mb-4">
                  <p className="text-sm font-medium text-gray-900">
                    {testimonal.text}
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="text-xs font-medium text-gray-900">
                    {testimonal.author}
                  </p>
                  <p className="text-gray-500 text-sm"> {testimonal.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
