export default function HeroSection() {
    return (
      <div className="relative p-8 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://img.freepik.com/premium-photo/group-people-doing-yoga-park_180601-6959.jpg?height=800&width=1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 pt-16 p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-normal text-white mb-6">
              Welcome to<br />
              the Yogic World.
            </h1>
            <div className="space-y-4">
              <p className=" text-white/90">
                Yoga Teacher Trainings, Classes,<br />
                Meditation, Pranayama, Music,<br />
                Philosophy & More.
              </p>
              <p className="italic text-white/80">
                Everything under $10.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  