import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="netflix-logo">
        NETFLIX
      </div>

      {/* Menu */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>

        <Link to="/tv-shows">TV Shows</Link>

        <Link to="/trending">Trending</Link>

        <Link to="/my-list">My List</Link>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>

    </nav>
  );
}

export default Navbar;