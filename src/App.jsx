import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Instructions from "./components/Instructions/Instructions.jsx"
import Chip from "./components/Chip/Chip.jsx"
import { useState } from "react"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel.jsx"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [currentCategory, setCategory] = React.useState();
  const [currentRestaurant, setRestaurant] = React.useState();
  const [currentItem, setItem] = React.useState();

  var currentMenuItems = data.filter((element,index) => {
      return (element.food_category === currentCategory) && (element.restaurant === currentRestaurant);
  })

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category) => (<Chip key={category} label={category} onClick={() => {currentCategory == category ? setCategory("") : setCategory(category)}} isActive={category == currentCategory} />))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description= {appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{/* YOUR CODE HERE */} {restaurants.map((restaurant) =>(<Chip key={restaurant} label={restaurant} onClick={() => {currentRestaurant == restaurant ? setRestaurant("") : setRestaurant(restaurant)}} isActive={ restaurant == currentRestaurant} />))}</div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        {currentItem ? <Instructions instructions={appInfo.instructions.allSelected}/> : (currentCategory && currentRestaurant) ? <Instructions instructions={appInfo.instructions.noSelectedItem} /> : currentRestaurant ? <Instructions instructions={appInfo.instructions.onlyRestaurant} /> : currentCategory ? <Instructions instructions={appInfo.instructions.onlyCategory} /> : <Instructions instructions={appInfo.instructions.start} /> }
        {/* MENU DISPLAY */}
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

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
