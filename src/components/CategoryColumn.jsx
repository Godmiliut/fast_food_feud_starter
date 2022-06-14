import * as React from "react"
import Chip from "./Chip/Chip.jsx"

export function CategoryColumn(props, isActive="", onClick=() => {}){
    const {categories} = props;
    console.log({categories});
    return(
        <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category) => (<Chip key={category} label={category} onClick={onClick} isActive={isActive} />))}
        </div>
      </div>
    )
}
export default CategoryColumn