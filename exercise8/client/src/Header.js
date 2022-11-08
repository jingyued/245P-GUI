import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="/Users/dai/Desktop/245P/exercise8/client/1.jpg" className="logo">
        fujifilm
        </a>
        <div className="headerRight">
          <a className="active" href="#home">
            Home
          </a>
          <a href="https://www.fujifilm.com/us/en/contact">Contact</a>
          <a href="https://www.fujifilm.com/us/en/about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;