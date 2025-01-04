import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import YogaMerits from "../components/YogaMerits";
import Carousel from "../components/Carousel";
import ReviewCarousel from "../components/ReviewCarousel";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <main className="bg-white">
      <NavBar />
      <Hero />
      <YogaMerits />
      <Carousel />
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image Column */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/young-beautiful-woman-with-eyes-closed-practising-yoga-stretching-plough-pose-garden_549612-391.jpg?height=600&width=800"
              alt="Person practicing yoga outdoors"
              className="object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Yoga Like Never Before
            </h1>
            <p className="text-lg text-gray-600">
              Becoming a Yoga Teacher has never been so easy. You can even
              download your favorite classes so they&apos;re always available
              when you want them.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
                <button className="h-14 px-6 flex items-center gap-2 rounded-lg text-white bg-black">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Apple Store</div>
                  </div>
                </button>

                <button
                  variant="outline"
                  className="h-14 px-6 flex items-center gap-2 border-gray-300 text-white rounded-lg bg-black"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.497-.544 2.371 2.371 0 0 1-.382-1.311V3.669c0-.472.132-.932.382-1.311.138-.21.303-.396.497-.544zm16.521 8.878l-3.01-1.66-3.479 3.022 3.479 3.023 3.01-1.661c1.09-.6 1.09-2.124 0-2.724zM4.49 1.1l8.517 7.415-2.665 2.32L4.49 1.1zm0 21.8l5.852-9.735 2.665 2.32L4.49 22.9z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Play Store</div>
                  </div>
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What they say about <span className="block">Bodsphere</span>
        </h2>
        <ReviewCarousel />
      </div>
      <PricingSection />
      <div className="p-8">
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Recommended Label */}
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white/90">
                Recommended
              </p>

              {/* Main Heading */}
              <h1 className="mb-8 text-4xl font-normal leading-tight text-white sm:text-5xl md:text-4xl">
                Get access to the entire content and transform your{" "}
                <span className="block">life.</span>
              </h1>

              {/* CTA Button */}
              <button
                className="bg-white text-gray-900 hover:bg-gray-100 p-2"
                size="lg"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>

        <section className="mx-auto px-4 py-12 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 items-center bg-slate-600 p-4 rounded-xl">
            {/* Content Column */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-2xl font-bold tracking-tight text-white">
                Download the app
              </h1>
              <p className="text-md text-white">
                Get unlimited access to Yoga Teacher Trainings, Yoga classes,
                Meditation and Pranayama, Yogic Wisdom and more.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="h-14 px-6 flex items-center gap-2 rounded-lg text-white bg-black">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Apple Store</div>
                  </div>
                </button>

                <button
                  variant="outline"
                  className="h-14 px-6 flex items-center gap-2 border-gray-300 text-white rounded-lg bg-black"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.497-.544 2.371 2.371 0 0 1-.382-1.311V3.669c0-.472.132-.932.382-1.311.138-.21.303-.396.497-.544zm16.521 8.878l-3.01-1.66-3.479 3.022 3.479 3.023 3.01-1.661c1.09-.6 1.09-2.124 0-2.724zM4.49 1.1l8.517 7.415-2.665 2.32L4.49 1.1zm0 21.8l5.852-9.735 2.665 2.32L4.49 22.9z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Play Store</div>
                  </div>
                </button>
              </div>
            </div>
            {/* Image Column */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://img.freepik.com/premium-photo/young-beautiful-woman-with-eyes-closed-practising-yoga-stretching-plough-pose-garden_549612-391.jpg?height=600&width=800"
                alt="Person practicing yoga outdoors"
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Dashboard;
