import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.gnb}>
      <h1 className={styles.title}>점심 뭐 먹지</h1>
    </header>
  );
};

export default Header;
