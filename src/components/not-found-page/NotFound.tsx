import { NavLink } from 'react-router-dom';
import './not-found.scss';

export const NotFound = () => {
  return (
    <section data-testid="not-found" className="not-found-section">
      <div className="content">
        <NavLink to="/">Go home</NavLink>
      </div>
    </section>
  );
};
