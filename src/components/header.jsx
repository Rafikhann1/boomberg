export default function Header() {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="left">
        <img src="/src/assets/menu.png" alt="Menu" className="icon" />

        <div className="line"></div>

        <img src="/src/assets/search.png" alt="Search" className="icon" />

        <img
          src="/src/assets/notification-bell.png"
          alt="Notification"
          className="icon"
        />
      </div>
      {/* Center */}
      <div className="logo">
        Bloomberg
      </div>

      {/* Right */}
      <div className="right">
        <button className="signin">Sign In</button>
        <button className="subscribe">Subscribe</button>
      </div>

    </nav>
  )
}