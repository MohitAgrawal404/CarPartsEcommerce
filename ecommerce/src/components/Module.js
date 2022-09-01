import React, { useContext } from "react";
import "../App.css";
import { Context } from "../App";
import { IoArrowBack } from "react-icons/io5";

const Module = (props) => {
  const [val, setVal] = useContext(Context);

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <IoArrowBack onClick={props.onClose} size={32} className="icon2">
        {" "}
      </IoArrowBack>
      <br></br>
      
        <div className="row">
          <div className="column">
            <img src={props.Photo} alt={props.Photo} className="big-img" />
          </div>
          <div className="column">
            <div className="name">{props.Name}</div>
            <div className="desc">{props.Desc}</div>
            <div className = "cart">
            <button
              onClick={() => {
                setVal(val + props.Price);
                console.log(val);
              }} 
            >
              Add to Cart
            </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Module;
