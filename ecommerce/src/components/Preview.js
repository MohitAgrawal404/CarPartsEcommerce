import React from "react";

function Preview(props) {
  return (
    <div>
    <br></br>
      <div className = "center"> {props.Name}</div>
        <img src = {props.Image} className = "imce"/>
      <div className="center"> ${props.Price}</div>
    </div>
  );
}

export default Preview;
