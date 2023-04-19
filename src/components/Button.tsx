import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  kind: 'primary' | 'secondary';
  onClick: () => void;
}

export default function Button({ text, kind, onClick }: ButtonProps) {
  return (
    <button type="button" className={styles[kind]} onClick={onClick}>
      {text}
    </button>
  );
}
