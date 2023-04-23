import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>점심 뭐 먹지</h1>
    </header>
  );
}

export default Header;
