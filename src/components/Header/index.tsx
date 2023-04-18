import "./index.css";
import { Component } from "react";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">{title}</h1>
    </header>
  );
};

export default Header;
