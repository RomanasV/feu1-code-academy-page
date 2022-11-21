import { Link } from "react-router-dom";
import Container from "../UI/Container/Container";

const Header = () => {
  let navLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/programos",
      title: "Programos",
    },
    {
      url: "/naujienos",
      title: "Naujienos",
    },
  ];

  function renderNavLinks(linksArray) {
    if (linksArray.length === 0) {
      return 'No links :('
    }

    let navLinkElements = linksArray.map((navLink, index) => (
      <li key={index} className="menu-item">
        <Link to={navLink.url}>{navLink.title}</Link>
      </li>
    ));

    return <ul className="main-menu">{navLinkElements}</ul>;
  }

  return (
    <header className="main-header">
      <Container>
        <div className="main-header-content-wrapper">
          <div className="logo-wrapper">
            <img
              src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
              alt="CodeAcademy Black Logo"
            />
          </div>

          <nav className="main-navigation">
            {renderNavLinks(navLinks)}
            {/* <a href="tel:+37066366555" className="button">Skambinti</a> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
