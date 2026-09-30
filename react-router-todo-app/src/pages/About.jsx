import styles from './Page.module.css';

function About() {
  return (
    <section>
      <h1 className={styles.heading}>About</h1>
      <p className={`${styles.sub} ${styles.text}`}>
        Deskwork is a practice project built with React, React Router and CSS Modules.
        Your to-do list is saved in this browser, so it is still here when you come back.
      </p>
    </section>
  );
}

export default About;
