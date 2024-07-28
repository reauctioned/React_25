import { useEffect, useState } from "react"



export default function SearchAutoComplete(){
    

     const [loading, setLoading] = useState(false)
     const [users,setUsers] = useState([])
     const [error, setError] = useState(null)


    async function fetchUserList(){
        try{
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')

            const data = await res.json()

            if(data && data.users && data.users.length){
                setUsers(data.users.map(()=> userItem.firstName))
                setLoading(false)
                setError(null)
            }
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