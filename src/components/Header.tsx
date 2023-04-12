import { Component } from "react";

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} text-title`}>점심 뭐 먹지</h1>
        </div>
      </header>
    );
  }
}

export default Header;
