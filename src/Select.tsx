import React from "react";

class Select extends React.Component {
    render() {
        return (
            <select name="category" id="category-filter" className="restaurant-filter">
            { /* 옵션이 가변적으로 바뀐다. name과 id도 */}
          </select>
        )
    }
}

export default Select;