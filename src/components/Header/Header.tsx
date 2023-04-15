import './Header.css';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">{title}</h1>
    </header>
  );
}

export default Header;
