import "./index.css";
import { Component } from "react";

interface HeaderProps {
  title: string;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="gnb">
        <h1 className="gnb__title text-title">{this.props.title}</h1>
      </header>
    );
  }
}
