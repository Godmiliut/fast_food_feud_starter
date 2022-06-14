import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item}= props;
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      <h4 className="item-name">{item.item_name}</h4>

      <ul className="fact-list">{/* WRITE CODE HERE */} {nutritionFacts.map((fact) => (<NutritionalLabelFact id={fact.id} label={fact.label} attribute={fact.attribute} item={item}/>))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
 const {item} = props;
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE CODE HERE */} {props.label}</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */} {item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
