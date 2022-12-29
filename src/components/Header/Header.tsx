import "./Header.style.scss";
import { StateContext } from "../../App";
import { useContext } from "react";

const Header = () => {
  const { setSwitcher } = useContext(StateContext);

  const switchPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSwitcher((e.target as HTMLElement).dataset.switcher);
  };

  return (
    <header className="header">
      <h1 className="header__title">This is Header</h1>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <a
              className="header__link"
              href="#"
              data-switcher="Task"
              onClick={switchPage}
            >
              Task Manager
            </a>
          </li>
          <li className="header__navigation-item">
            <a
              className="header__link"
              href="#"
              data-switcher="Timer"
              onClick={switchPage}
            >
              Timer
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
