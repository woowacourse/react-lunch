import React from "react";

const Header = () => {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
    </header>
  );
};

export default React.memo(Header);
