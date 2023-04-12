import React from "react";

interface SelectBoxProps {
  options: string[];
  setState: any;
}

class SelectBox extends React.Component<SelectBoxProps, {}> {

  render() {
    return (
      <select className="select-box" onChange={this.props.setState}>
        {this.props.options.map(option => (<option value={option}>{option}</option>))}
      </select>
    )
  }
}

export default SelectBox;