import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* App Download Section */}
        <div className="space-y-4">
          <h2 className="text-orange-400 font-semibold">Bodsphere</h2>
          <p className="text-gray-600 max-w-xs text-sm">
            Download the Bodsphere App to take classes offline and practice
            anytime, anywhere.
          </p>
        </div>

        {/* Navigation as */}
        <div className="flex justify-center">
          <a
            href="/faq"
            className="text-gray-600 hover:text-gray-900 transition-colors font-small"
          >
            FAQ
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors font-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Follow Bodsphere</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110"
            >
              <Facebook size={12} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://youtube.com"
              className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110"
            >
              <Youtube size={12} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://linkedin.com"
              className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110"
            >
              <Linkedin size={12} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              className="rounded-full bg-black p-2 text-white transition-transform hover:scale-110"
            >
              <Instagram size={12} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pt-4">
        <button className="h-14 px-6 flex items-center gap-2 rounded-lg text-white bg-black">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
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
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.497-.544 2.371 2.371 0 0 1-.382-1.311V3.669c0-.472.132-.932.382-1.311.138-.21.303-.396.497-.544zm16.521 8.878l-3.01-1.66-3.479 3.022 3.479 3.023 3.01-1.661c1.09-.6 1.09-2.124 0-2.724zM4.49 1.1l8.517 7.415-2.665 2.32L4.49 1.1zm0 21.8l5.852-9.735 2.665 2.32L4.49 22.9z" />
          </svg>
          <div className="text-left">
            <div className="text-xs">Get it on</div>
            <div className="text-sm font-semibold">Play Store</div>
          </div>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
        <p>© 2024 Bodsphere. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/terms" className="hover:text-gray-900 transition-colors">
            Terms
          </a>
          <a href="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
