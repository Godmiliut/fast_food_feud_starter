import * as React from "react"
import Chip from "./Chip/Chip.jsx"

export function RestaurantsRow(props){
    const {restaurants}= props;
    const [currentRestaurant, setRestaurant] = React.useState();
    return(
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{/* YOUR CODE HERE */} {restaurants.map((restaurant) =>(<Chip key={restaurant} label={restaurant} onClick={() => {currentRestaurant == restaurant ? setRestaurant("") : setRestaurant(restaurant)}} isActive={ restaurant == currentRestaurant} />))}</div>
        </div>
    )
}
export default RestaurantsRow