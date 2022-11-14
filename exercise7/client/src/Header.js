import "./Header.css";

function Header() {
  return (
    <>
    {/* Note, that className is used instead of class in React!  */}
      <div className="header">
        {/* into a new link */}
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        {/* Note, that class of header-right was also rewritten with camelcase to be headerRight. */}
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;