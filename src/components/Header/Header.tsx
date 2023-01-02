import { useContext } from "react";
import { StateContext } from "../../App";
import "./Header.style.scss";

const Header = () => {
  const [getSwitcher, setSwitcher] = useContext(StateContext).switcher;

  const switchPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSwitcher((e.target as HTMLElement).dataset.switcher);
  };

  return (
    <header className="header">
      <h1 className="header__title">Task Helper</h1>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <a
              className="header__link"
              href="#"
              data-switcher="Task"
              onClick={switchPage}
            >
              Task List
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
