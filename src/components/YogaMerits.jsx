export default function YogaMerits() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
        <div>
          <h2 className="text-5xl font-bold mb-2">190+</h2>
          <p className="text-gray-600">Countries</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-2">1,000+</h2>
          <p className="text-gray-600">On-Demand Classes</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-2">100K</h2>
          <p className="text-gray-600">Members</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">Discover Your Yogic Path</h1>
        <p className="text-xl text-gray-600">
          Join our community and transform your yoga practice today.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#f3f4f8] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-sm font-semibold mb-4 text-center">
            Yoga Teacher Trainings
          </h3>
          <p className="text-gray-600 text-center text-xs font-normal">
            Become certified Yoga Teachers and transform your practice with
            World's most accessible & affordable programs.
          </p>
        </div>

        <div className="bg-[#f3f4f8] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-sm font-semibold mb-4 text-center">
            Yoga Classes
          </h3>
          <p className="text-gray-600 text-center text-xs font-normal">
            Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa and
            a lot more, to enhance your well-being.
          </p>
        </div>

        <div className="bg-[#f3f4f8] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-sm font-semibold mb-4 text-center">Calm Music</h3>
          <p className="text-gray-600 text-center text-xs font-normal">
            Experience tranquility with our calming music, perfect for
            relaxation and mindfulness.
          </p>
        </div>

        <div className="bg-[#f3f4f8] rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-sm font-semibold mb-4 text-center">
            Pranayama & Meditation
          </h3>
          <p className="text-gray-600 text-center text-xs font-normal">
            Explore the power of breath and enhance your self-awareness and
            inner peace.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
              Get Internationally Accredited by Bodsphere, from the comfort of
              your home
            </h1>
            <p className="text-sm text-gray-700 leading-relaxed">
              Join the Bodsphere Community and take the first step towards
              joining the World's Biggest Community of Yoga Schools and Teachers
              that represent high quality, safe, affordable, accessible and
              equitable Yoga.
            </p>
            <a
              href="#get-started"
              className="inline-block px-8 py-3 border-2 border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300"
            >
              Get Accredited
            </a>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19]">
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl transform rotate-3">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-black rounded-b-3xl z-20">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 h-4 w-20 bg-gray-950 rounded-full flex items-center justify-between px-2">
                    <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                  </div>
                </div>

                <div className="absolute inset-2 bg-gray-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="relative h-7 bg-gray-900 flex justify-between items-center px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                      <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                      <div className="w-3 h-2 border-2 border-white"></div>
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="h-[calc(100%-1.75rem)] w-full bg-gray-900 text-white">
                    {/* Video Player */}
                    <div className="relative aspect-video bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-l-0 border-t-0 transform rotate-[-45deg]"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <p className="text-sm">Lower Body Strength</p>
                        <p className="text-xs text-gray-400">45:35</p>
                      </div>
                    </div>

                    {/* Course List */}
                    <div className="p-4 space-y-4">
                      <p className="text-xs leading-relaxed">
                        Want your body to be healthy, join our program with
                        directions according to body's goals. Increasing
                        physical strength is the goal of strength training.
                        Maintain body fitness by doing physical exercise at
                        least 2-3 times a week.
                      </p>

                      {/* Course Items */}
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg"
                        >
                          <div className="w-20 h-20 bg-gray-700 rounded-lg"></div>
                          <div>
                            <h3 className="font-small">Stability Training</h3>
                            <p className="text-sm text-gray-400">Basics</p>
                            <span className="text-xs text-red-500">PRO</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
