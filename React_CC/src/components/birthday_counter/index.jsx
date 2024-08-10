
import { useState } from "react";
import "./list.css";
import List from "./list";

export default function BirthdayCounter() {
  return (<div className="wrapper">
    <div className="container-birthday">
        <h3>0 Birthdays Today</h3>
        <List/>
        <button   className="w-20 h-10 p-0 mx-5 my-2"  onClick={()=> console.log('clicked')}>Clear</button>
    </div>
  </div>) 
}
