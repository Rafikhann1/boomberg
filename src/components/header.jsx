import './Header.css'

export default function Header(props) {


  
  return (
    <nav className="navbar sticky bg-white opacity-99 top-0">
      {/* Left */}
      <div className="left">
        <img 
          src="/src/assets/menu.png" 
          alt="Menu" 
          className="icon" 
          onClick={props.handleClick}
        />

        <div className="line"></div>

        <img src="/src/assets/search.png" alt="Search" className="icon" />

        <img
          src="/src/assets/notification-bell.png"
          alt="Notification"
          className="icon"
        />
      </div>
      {/* Center */}
      <div className="logo text-base sm:text-lg md:text-xl lg:text-2xl">
        bloomberg
      </div>

      {/* Right */}
      <div className="right">
        <button className="signin">Sign In</button>
        <button className="subscribe">Subscribe</button>
      </div>

    </nav>
  )
}