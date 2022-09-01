import React, { useState } from "react";
import Preview from "./Preview";
import Module from "./Module";
import "../App.css";


function List(props) {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState({
    Name: null,
    Photo: null,
    Price: null,
    Desc: null,
    Comp: null,
    Model: null,
    Year: null,
  });

  return (
    <div className="grid">
      {props.data.map((item) => (
        <div className="square"
          onClick={() => {
            setShow(true);
            setItems({
              Name: item.Name,
              Photo: item.Photo,
              Price: item.Price,
              Desc: item.Description,
              Comp: item.Company,
              Model: item.Model,
              Year: item.Year,
            });
            console.log(item.Name);
          }}
        >
          <Preview Name={item.Name} Image={item.Photo} Price={item.Price} />
        </div>
      ))}
      <Module
        show={show}
        Name={items.Name}
        Photo={items.Photo}
        Price={items.Price}
        Desc={items.Desc}
        Comp={items.Company}
        Model={items.Model}
        Year={items.Year}
        onClose={() => setShow(false)}
        // onCart={props.ItemCart(items.Price)}
      />
    </div>
  );
}

export default List;
