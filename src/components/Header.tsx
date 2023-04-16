import styles from "./Header.module.css";

interface HeaderProps {
  title: string
}

const Header = (props: HeaderProps) => {
  const {title} = props

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={`${styles.title} text-title`}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
