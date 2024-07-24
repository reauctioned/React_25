import { useState, useEffect } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import "./styles.css"



export default function ImageSlider({url, limit= 5, page = 1}){
   
  const [images, setImages] = useState([])
  const [slide, setSlide] = useState(0)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState (false)


  async function fetchImages(getUrl){
    try{

        setLoading(true)
       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
       const data = await response.json()

       if(data){
        setLoading(false)
        setImages(data)}


    }catch(e){
        setLoading(false)
        setErrorMessage(e.message)
    }
  }

console.log(images)
  useEffect(()=>{
    if(url !== '') fetchImages(url)
  },[url])

if(loading){
 return <div>
    Loading Data!
 </div>
}


if(errorMessage !== null)
{
    return <div>
        Error Occured! {errorMessage}
    </div>
}

    return <div className = "container">
        <BsArrowLeftCircleFill className=" arrow arrow-left" />
        {
          images && images.length ?
          images.map(imageItem => (
            <img 
              key = {imageItem.id}
              alt = {imageItem.download_url}
              src = {imageItem.download_url} 
              className="current-image"/>
          )):null
        }

        
        <BsArrowRightCircleFill className="arrow arrow-right" />
        <span className="circle-indicators">{
          images && images.length ?
          images.map((_,index) => (
          <button
          key={index}
          className="current-indicator">

          </button>
           )):null
           }
        </span>


    </div>
}