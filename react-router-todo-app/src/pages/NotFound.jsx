import { Link } from 'react-router-dom';
import styles from './Page.module.css';

function NotFound() {
  return (
    <section>
      <h1 className={styles.heading}>Page not found</h1>
      <p className={`${styles.sub} ${styles.text}`}>
        That address doesn't exist. <Link to="/">Go back home</Link>.
      </p>
    </section>
  );
}

export default NotFound;
