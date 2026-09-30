import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <section>
      <h1 className={styles.title}>Small tools for a tidy desk.</h1>
      <p className={styles.lead}>
        Browse a few desk products, then keep track of your tasks.
      </p>

      <div className={styles.links}>
        <Link to="/products" className={styles.link}>
          <strong>Products</strong>
          <span>Pick a colour and quantity, then add to cart.</span>
        </Link>
        <Link to="/todo" className={styles.link}>
          <strong>To-Do list</strong>
          <span>Add tasks, tick them off, delete what you don't need.</span>
        </Link>
      </div>
    </section>
  );
}

export default Home;
