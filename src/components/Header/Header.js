import Container from "../UI/Container/Container";

const Header = () => {
  return (
    <header class="main-header">
      <Container>
        <div class="main-header-content-wrapper">
          <div class="logo-wrapper">
            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt="CodeAcademy Black Logo" />
          </div>
          
          <nav class="main-navigation">
            <ul class="main-menu">
              <li class="menu-item"><a href="/">Home</a></li>
              <li class="menu-item"><a href="/programos">Programos</a></li>
              <li class="menu-item"><a href="/naujienos">Naujienos</a></li>
            </ul>
            {/* <a href="tel:+37066366555" class="button">Skambinti</a> */}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header; 