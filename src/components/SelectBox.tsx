import React, { ChangeEventHandler } from "react";

interface SelectBoxProps {
  options: string[];
  setState: ChangeEventHandler<HTMLSelectElement>;
}

class SelectBox extends React.Component<SelectBoxProps, {}> {

  render() {
    return (
      <select className="select-box" onChange={this.props.setState}>
        {this.props.options.map(option => (<option value={option} key={option}>{option}</option>))}
      </select>
    )
  }
}

export default SelectBox;