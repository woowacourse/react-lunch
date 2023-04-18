import "./index.css";
import { HeaderProps } from "./type";

const Header = (props: HeaderProps) => {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">{props.title}</h1>
    </header>
  );
};

export default Header;
