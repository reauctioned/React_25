import { useState } from "react"


export default function UseLocalStorage(key,defaultValue){
 const [value , setValue] = useState(() => {

    let currentValue

    try{ currentValue = json.parse(localStorage.getItem(key) || string(defaultValue))

    }catch(error){
        console.log(error);
        currentValue = defaultValue
    }
 })
    return currentVaue
}