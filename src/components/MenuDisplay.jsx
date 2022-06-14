import * as React from "react"
import Chip from "./Chip/Chip.jsx"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel.jsx"

export function MenuDisplay(props){
    const {data} = props;
    console.log(props.currentCategory);
    const [currentItem, setItem] = React.useState();
    var currentMenuItems = data.filter((element,index) => {
        return (element.food_category === currentCategory) && (element.restaurant === currentRestaurant);
    })
    return(
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((item,index) => (<Chip key={index} label={item.item_name} onClick={() => {currentItem == item ? setItem("") : setItem(item)}} isActive={item == currentItem}/>))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{/* YOUR CODE HERE */}
           {currentItem ? <NutritionalLabel item={currentItem} /> : null}
        
          </div>
        </div>
    )
}
export default MenuDisplay