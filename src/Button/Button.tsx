import React, { Component } from 'react';

import './Button.css';

interface ButtonProps {
  color: string;
  name: string;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        type="button"
        className={`button button--${this.props.color} text-caption`}
        onClick={this.props.onClose}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
