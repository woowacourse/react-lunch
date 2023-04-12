import React, { ChangeEventHandler } from "react";

interface SelectBoxProps {
  options: string[];
  setState: ChangeEventHandler<HTMLSelectElement>;
}

class SelectBox extends React.Component<SelectBoxProps, {}> {

  render() {
    const { options, setState } = this.props;
    return (
      <select className="select-box" onChange={setState}>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    )
  }
}

export default SelectBox;
