
import { useState } from "react";
import "./list.css";
import List from "./list";
import data from "./data";

export default function BirthdayCounter() {
    
    const [people,setPeople]= useState(data);
    
   function handleClear(){
        setPeople([])
    }
        

  return (<div className="bg-slate-500  rounded-md">
    <div className="container-birthday">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
        <button   className="w-20 h-10 p-0 mx-5 my-2"  onClick={handleClear}>Clear</button>
    </div>
  </div>) 
}
