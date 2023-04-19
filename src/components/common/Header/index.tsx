import './Header.css';

type HeaderProps = {
  children: string;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">{children}</h1>
    </header>
  );
}
