import './style.css';
import { DOMAIN } from '../../constants';

const Header = () => {
  return (
    <header className="gnb">
      <a href={DOMAIN}>
        <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      </a>
    </header>
  );
};

export default Header;
