import { useEffect, useState } from "react"


export  default function  ScrollIndicator({url}){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [errorMessage , setErrorMessage] = useState("")
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response =await fetch(getUrl)
            const data = await response.json()
            
            if(data && data.products && data.products.length > 0)
            {setData(data.products)
                setLoading(false)
            }
              
        }catch(e)
       { console.log(e)}
    }


    useEffect(()=> {
        fetchData(url)
    },[url])

    function handleScrollPercentage(){
        
    }
      
    useEffect(()=>
    window.addEventListener('scroll',handleScrollPercentage))
    return ()=>
        window.removeEventListener('scroll',{})


    return (
        <div>
        <h1>Scroll Indicator</h1>
            <div className="data-container">
        {
            data && data.length > 0 ? 
            data.map((dataItem)=> 
                <p>{dataItem.title}</p>
            ):null}
            </div>

        </div>
    )


}