import React from "react";
import Select from "./Select.tsx";
import { CATEGORY_OPTIONS, SORTING_OPTIONS } from "./constant.ts";

type SelectContainerProps = {
    onChangeFilterOptions: (e:any) => void;
    filterOptions: any;
}
class SelectContainer extends React.Component<SelectContainerProps> {
    render() {
        return (
            <section className="restaurant-filter-container">
                <Select name="category" options={CATEGORY_OPTIONS} onChangeFilterOptions={this.props.onChangeFilterOptions}/>
                <Select name="sorting" options={SORTING_OPTIONS} onChangeFilterOptions={this.props.onChangeFilterOptions}/>
            </section>
        );
    }
}

export default SelectContainer;

/* <select name="category" id="category-filter" className="restaurant-filter">
<option value="전체">전체</option>
<option value="한식">한식</option>
<option value="중식">중식</option>
<option value="일식">일식</option>
<option value="양식">양식</option>
<option value="아시안">아시안</option>
<option value="기타">기타</option>
</select>

<select name="sorting" id="sorting-filter" className="restaurant-filter">
<option value="name">이름순</option>
<option value="distance">거리순</option>
</select> */