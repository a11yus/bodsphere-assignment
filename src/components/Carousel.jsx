"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instructors = [
  {
    name: "Preetika Bhatnagar",
    image:
      "https://news.dasa.ncsu.edu/wp-content/uploads/sites/39/2019/08/Shaily-Article-Photo.png",
  },
  {
    name: "Samarthya Bhatnagar",
    image:
      "https://serviceninjas.in/wp-content/uploads/2021/03/yoga-trainer-delhi.jpeg",
  },
  {
    name: "Diana",
    image:
      "https://news.dasa.ncsu.edu/wp-content/uploads/sites/39/2019/08/Shaily-Article-Photo.png",
  },
  {
    name: "Herkeesh",
    image:
      "https://serviceninjas.in/wp-content/uploads/2021/03/yoga-trainer-delhi.jpeg",
  },
  {
    name: "Shreestha",
    image:
      "https://news.dasa.ncsu.edu/wp-content/uploads/sites/39/2019/08/Shaily-Article-Photo.png",
  },
  // Add more instructors as needed
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Your Instructors</h2>
        <p className="text-xl text-gray-600">
          We work with the finest professionals to ensure you feel your best.
        </p>
      </div>

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
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="h-1/4 w-1/4 flex-shrink-0 snap-center border-2 border-gray-300 p-3 rounded-xl"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-56">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={instructor.image}
                    alt={`${instructor.name} teaching yoga`}
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{instructor.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
