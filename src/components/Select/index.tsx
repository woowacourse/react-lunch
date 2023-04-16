import React from "react";
import St from "./styled";

interface SelectProps {
  options: readonly string[];
  onChange(value: string): void;
}

export default function Select({ options, onChange }: SelectProps) {
  return (
    <St.Layout onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <St.Option value={option} key={option}>
          {option}
        </St.Option>
      ))}
    </St.Layout>
  );
}
