// src/components/Header/Header.jsx
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Astro</h1>
    </header>
  );
}

export default Header;