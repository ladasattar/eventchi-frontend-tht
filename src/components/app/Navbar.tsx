import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] bg-white flex items-center justify-center">
      <ul className="container mx-auto">
        <li>
          <Link to="/" className="font-extrabold text-slate-950 text-2xl">
            <p>
              Event<span className="text-primary">bux</span>
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
