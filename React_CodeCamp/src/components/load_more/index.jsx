import {useState , useEffect} from "react"
import "./styles.css"


export default function LoadMore(){
   const[loading,setLoading] = useState(false)
   const [products,setProducts] = useState([])
   const [count, setCount] = useState(0)
   const [buttonState, setButtonState] = useState (false)

   useEffect(() => {
          if(products && products.length === 100)
            setButtonState(true)
   },[products])
     
   
   async function fetchProducts(){
    try{
        setLoading(true)
       const response = 
       await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`)

       const result = await  response.json() 
       if(result && result.products && result.products.length){
        setProducts(prevData => [...prevData, ...result.products ])
        setLoading(false)
       }



    }catch(e){
        console.log(e)
        setLoading(false)
    }
   }
   
   
   useEffect(() => {
    fetchProducts()
   },[count])



   if(loading){
    return <div>Loading data ! ! !</div>
   }





    return <div className="load-more-container">
     <div className="product-container">
         {
            products && products.length ?
            products.map((item) =>(<div className="product"   key={item.id}> 
                 <img
                 src={item.thumbnail} alt = {item.title}/>
                 <p>{item.title}</p>

            </div>)):null
         }
     </div>
     <div  className="button-container"><button disabled={buttonState}  onClick={()=> setCount(count + 1)} >{buttonState? 'Disabled' : 'Load More'}</button></div>
    </div>
}