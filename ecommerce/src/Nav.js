import React from 'react';
import "./App.css";
//import {cardoutline} from "ionicons/icons"
import { BsCreditCard } from 'react-icons/bs';

function Nav() {
    return(
        <div>
            <div className = "Title">
                Car Parts
            </div>
            <BsCreditCard size ={30} className = "icon"/>
        </div>
    );

}

export default Nav;