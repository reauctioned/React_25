import { useEffect, useState } from "react"




export default function ProfileFinder(){

     const[userName, setUserName] = useState("reauctioned")
     const [userData,setUserData] = useState(null)
     const [loading, setLoading] = useState(true)


    async function fetchGitHubUserData(){

        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()
        if(data){
            setUserData(data)
            setLoading(false)

        }
        
    }


    function handleSubmit(){
       
        useEffect(()=> {
            fetchGitHubUserData()
        },[])
    }

    if(loading){
        return <h1>Loading Data...</h1>
    }

  return <div className="github-profile-container">
      <div className="input-record">
            <input 
            type="text"
            name="search-user" 
            placeholder="reauctioned" 
            onChange={(event)=> setUserName(event.target.value)} 
            value={userName}
            />
            <button onClick={handleSubmit}>Search</button>
      </div>
  </div>

}