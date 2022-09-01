import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import Nav from "./Nav";
import List from "./components/List";
import { getDocs, collection } from "firebase/firestore";
import StripeContainer from "./Stripe/StripeContainer";
//import {Context} from "./components/List";

export const Context = React.createContext();

function App() {
  
  const [val, setVal] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const yee = async () => {
    const temp = [];

    const querySnapshot = await getDocs(collection(db, "Parts"));

    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });

    setData(temp);
    }
    yee();

  }, []);

  const handleChange = async (event) => {
    const temp = [];

    const querySnapshot = await getDocs(collection(db, "Parts"));

    querySnapshot.forEach((doc) => {
      if (doc.data().Name.includes(event.target.value)) {
        temp.push(doc.data());
      }
    });
    setData(temp);
  };


  return (
    <Context.Provider value={[val, setVal]}>
    <div className="Main">
      <Nav />
      <div className="Search">
        <input
          className="SearchBar"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <List data={data}/>
      <div>
        Total Due: {val}
      </div>
      <StripeContainer />
    </div>
    </Context.Provider>
  );
}

export default App;
