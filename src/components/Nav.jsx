import {headerLogo} from "../assets/images";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/" aria-label="Home">
          <img src={headerLogo} alt="Site logo" />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
