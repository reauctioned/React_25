import { useEffect, useState } from "react"
import Suggestions from "./suggestions"



export default function SearchAutoComplete(){
    

     const [loading, setLoading] = useState(false)
     const [users,setUsers] = useState([])
     const [error, setError] = useState(null)
     const [searchPara, setSearchPara] = useState("")
     const [showDropDown, setShowDropDown] = useState(false)
     const [filteredUsers, setFilteredUsers] = useState([])


    async function fetchUserList(){
        try{
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')

            const data = await res.json()

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem)=> userItem.firstName))
                setLoading(false)
                setError(null)
            }
        }catch(error)
        {setError(error)}
    }

    

     useEffect(()=> {
        fetchUserList()
     },[])

     function handleClick(event){
        setShowDropDown(false)
        setSearchPara(event.target.innerText)
        setFilteredUsers([])
      }
    
    console.log(users,filteredUsers)

     function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchPara(query)
        if(query.length > 1)
        {
            const filteredData = users && users.length
            ? 
            users.filter(item=> item.toLowerCase().indexOf(query) > -1): []
            setFilteredUsers(filteredData)
            setShowDropDown(true)
        }
        else{setShowDropDown(false)}
     }  


    return(
        <div className="search-autocomplete-container">
            {
                loading ? <h1>Loading Data...</h1> : (<input 
                value={searchPara}
                placeholder="search a username"
                name="search-users"
                type="text"
                onChange={handleChange} />)
            }
            
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )  
}