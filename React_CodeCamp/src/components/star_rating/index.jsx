import {FaStar } from 'react-icons/fa'
import { useState } from 'react'
import './styles.css'

export default function StarRating({noOfStars = 5}){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)


    function handleMouseClick(currentIndex){ if (currentIndex === rating) {
        setRating(0);
      } else {
        setRating(currentIndex);
      }
    }

    function handleMouseEnter(currentIndex){setHover(currentIndex);}

    function handleMouseExit(currentIndex){setHover(rating);}

return <div className="star-rating">
    {
        [...Array(noOfStars)].map((_,index)=> {

         index += 1

        return <FaStar
       key={index}
       className = {index <= (hover || rating )? 'active': ' inactive'}
       onClick={()=> handleMouseClick(index)}
       onMouseMove={()=> handleMouseEnter(index)}
       onMouseLeave = {()=> handleMouseExit(index)}
       size = {40} />
    }
    )    
}
     </div>

}