import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick= () => {}}) {
  var buttonClassName;
  if(isActive == false){
    buttonClassName= "chip";
  }
  else{
    buttonClassName= "chip active";
  }
  return (
    <button onClick={onClick} className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
      {console.log(isActive)}
    </button>
  )
}

export default Chip
