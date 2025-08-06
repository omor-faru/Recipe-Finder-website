import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-cyan-500 text-white p-4 shadow">
      <nav className="flex justify-between items-center mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">Recipe Finder</h1>

        <div className="space-x-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/contact">Contact</Link>
          <Link className="hover:underline" to="/favorite">Favorite</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
