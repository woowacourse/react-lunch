import React from "react";
import St from "./styled";

export default function Header() {
  const startPage = () => window.location.reload();

  return <St.Header onClick={startPage}>점심 뭐 먹지</St.Header>;
}
