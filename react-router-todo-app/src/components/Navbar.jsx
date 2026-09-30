import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/todo', label: 'To-Do' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.brand}>Deskwork</span>
        <nav aria-label="Main">
          <ul className={styles.list}>
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
