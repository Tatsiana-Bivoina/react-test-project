import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <header data-testid="header" className="header">
      <div className="wrapper">
        <div className="header-container">
          <nav data-testid="navbar">
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/form">Create cards</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
