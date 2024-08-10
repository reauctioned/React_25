import { useState } from "react";
import "./list.css";

export default function List({people}) {
  return (<div>
    {people.map((person)=> {
        const {name,age,image,id} = person
        return <article key={id} className="flex-1  flex-column">
                <img src={image} alt={name} className="w-10 h-10 mx-10" />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
        </article>
    })}
  </div>
  ) 
}
