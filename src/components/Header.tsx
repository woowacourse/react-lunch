import { Component } from "react";

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={`${styles.title} text-title`}>점심 뭐 먹지</h1>
      </header>
    );
  }
}

export default Header;
