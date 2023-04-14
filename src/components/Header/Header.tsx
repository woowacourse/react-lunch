import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.gnb}>
      <a href="">
        <h1 className={`${styles.gnbTitle} text-title`}>점심 뭐 먹지</h1>
      </a>
    </header>
  );
}

export default Header;
