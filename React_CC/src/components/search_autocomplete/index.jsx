import { useEffect, useState } from "react"



export default function SearchAutoComplete(){
    

     const [loading, setLoading] = useState(false)
     const [users,setUsers] = useState([])
     const [error, setError] = useState(null)


    async function fetchUserList(){
        try{
            const res = await fetch('https://dummyjson.com/users')

            const data = await res.json()
        }catch(error)
        {setError(error)}
    }



     useEffect(()=> {
        fetchUserList()
     })




    return(
        <div className="search-autocomplete-container">
            <input 
            placeholder="search a username"
            name="search-users"
            type="text" />
        </div>
    )  
}