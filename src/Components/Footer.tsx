import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold text-orange-400">🍴 FlavorFinder</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Discover, save, and enjoy delicious recipes from around the world.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            <li><Link to="/favorite" className="hover:text-orange-400">Favorite</Link></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm text-gray-300">📧 support@flavorfinder.com</p>
          <p className="text-sm text-gray-300">📞 +880 1234-567890</p>
          <p className="text-sm text-gray-300">🏠 Dhaka, Bangladesh</p>
        </div>
      </div>

     
      <div className="bg-slate-800 py-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FlavorFinder — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
