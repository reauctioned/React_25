import {FaStar } from 'react-icons/fa'
import { useState } from 'react'

export default function StarRating(noOfStars){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)


    function handleMouseClick(currentIndex){}

    function handleMouseEnter(currentIndex){}

    function handleMouseExit(currentIndex){}

return <div className="star-rating">
    {
        [...Array(noOfStars)].map((_,index)=> {

         index =+ 1

        return <FaStar
       key={index}
       onClick={()=> handleMouseClick(index)}
       onMouseMove={()=> handleMouseEnter(index)}
       onMouseLeave = {()=> handleMouseExit(index)}
       size = {40} />
    }
    )    
}
     </div>

}