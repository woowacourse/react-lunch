import React, { HTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  kind: 'primary' | 'secondary';
}

function Button(props: ButtonProps) {
  const { text, kind, onClick } = props;

  return (
    <button type="button" className={styles[kind]} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

