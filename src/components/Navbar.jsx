import "../styles/Navbar.scss";

export const NavBar = () => {
  const items = [
    { name: "Home", value: "Logo", icon: "fas fa-house-user fa-3x" },
    { name: "Home", value: "Home", icon: "fas fa-house-user fa-3x" },
    { name: "About", value: "About", icon: "fas fa-user-graduate fa-3x" },
    { name: "Projects", value: "Projects", icon: "fas fa-user-graduate fa-3x" },
    { name: "Contact", value: "Contact", icon: "fas fa-user-graduate fa-3x" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-nav">
        {items.map((item) => (
          <li key={item.value.toLowerCase()} className="navbar-item">
            <a href={`#${item.name.toLowerCase()}`} className="navbar-link">
              <span className="navbar-link-text">{item.value}</span>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};
