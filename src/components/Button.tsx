import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component<{ text: string; kind: 'primary' | 'secondary'; onClick: () => void }> {
  render() {
    const { text, kind, onClick } = this.props;
    return (
      <button type="button" className={styles[kind]} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
