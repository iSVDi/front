import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>Products App</p>
      </div>
      <div className="navbar-links">
        <p>Home</p>
        <p>Favorites</p>
      </div>
    </nav>
  );
}

export default Navbar;
