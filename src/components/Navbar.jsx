import { Bell, Music, User } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-[#edb176]">
              BodSphere
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/categories" className="text-gray-700 hover:text-gray-900">
              Categories
            </a>
            <span
              href="/notification"
              className="text-gray-700 hover:text-gray-900"
            >
              <Bell className="w-5 h-5" />
            </span>
            <a href="/ai-music" className="text-gray-700 hover:text-gray-900 flex gap-2">
              <Music className="w-5 h-5" /> 
              <p>AI Music</p>
            </a>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
