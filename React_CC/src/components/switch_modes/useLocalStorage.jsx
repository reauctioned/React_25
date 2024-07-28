import { useEffect, useState } from "react"


export default function UseLocalStorage(key,defaultValue){
 const [value , setValue] = useState(() => {

    let currentValue

    try{ currentValue = json.parse(localStorage.getItem(key) || string(defaultValue))

    }catch(error){
        console.log(error);
        currentValue = defaultValue
    }
    return currentValue
 })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])
    return [value,setValue]
}