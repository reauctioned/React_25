    import { useEffect, useState } from "react"
import User from "./user"
import "./styles.css"




    export default function GitHubProfileFinder(){

        const[userName, setUserName] = useState("reauctioned")
        const [userData,setUserData] = useState(null)
        const [loading, setLoading] = useState(true)


        async function fetchGitHubUserData(){

            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${userName}`)

            const data = await res.json()
            console.log(data)
            if(data){
                setUserData(data)
                setLoading(false)
                setUserName('')
 
            }
        }
        
        console.log(userData)

        
        useEffect(()=> {
            fetchGitHubUserData()
        },[])
        if(loading){
            return <h1>Loading Data...</h1>
        }

            function handleSubmit(){
              fetchGitHubUserData()
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
        {
            userData !== null ? <User user={userData} /> : null
        }
    </div>

    }