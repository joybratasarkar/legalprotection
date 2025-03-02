export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Working Hours */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start text-white mb-2">
              <i className="fas fa-clock mr-2"></i>
              <h4 className="text-lg font-semibold">Working Hours</h4>
            </div>
            <p className="text-gray-400 text-sm">Monday to Saturday</p>
            <p className="text-gray-400 text-sm">9am to 6pm</p>
          </div>
  
          {/* Useful Links */}
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/faq" className="hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="space-y-2 text-center md:text-right">
            <h4 className="text-lg text-white font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center justify-center md:justify-end text-white">
              <i className="fas fa-envelope mr-2"></i>
              <p className="text-gray-400 text-sm">info@thelegalprotection.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-end text-white">
              <i className="fas fa-phone-alt mr-2"></i>
              <p className="text-gray-400 text-sm">+91-8920833151</p>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
  
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-gray-500">
          
          {/* Logo and Disclaimer */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <img 
              src="/icons/iconLegal.png" 
              alt="Legal Protection Logo" 
              className="w-32 mb-4"
            />
            <p className="text-xs">
              &copy; 2025 thelegalprotection.com. Powered by thelegalprotection.com
            </p>
          </div>
  
          {/* Disclaimer */}
          <p className="text-xs text-gray-500 max-w-md">
            Disclaimer: The Legal Protection is a private consultancy service and not a law firm, 
            chartered accountancy firm, or government agency. We provide a platform to connect users 
            with independent legal and professional experts.
          </p>
        </div>
      </footer>
    );
  }
  