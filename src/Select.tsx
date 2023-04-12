import React from "react";

type SelectProps = {
    options: any[]
}

class Select extends React.Component<SelectProps> {
    render() {
        return (
          <select name="category" id="category-filter" className="restaurant-filter">
            {this.props.options.map((option) => <option key={option.value} value={option.value}>{option.textContent}</option>)}
          </select>
        )
    }
}

export default Select;