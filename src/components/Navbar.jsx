function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TravelX</h2>

      <ul>
        <li>Home</li>
        <li>Destinations</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">Book Now</button>
    </nav>
  );
}

export default Navbar;
