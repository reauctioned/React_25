import { createContext, useEffect, useState } from "react"
import featureFlagsDataCall from "../data"






export const FeatureFlagContext = createContext(null)

export default function FeatureFlagGobalState({children}){
    const [loading,setLoading]= useState(false)
    const [enableFlags, setEnableFlags]= useState({})

   async function fetchFeatureFlags(){
    try{
      const res = await featureFlagsDataCall()
      console.log(res);
    }catch(error){
        console.log(error);
        throw new Error(error)
    }
   }



   useEffect(()=>{
    fetchFeatureFlags()
   },[])

    return (
        <FeatureFlagContext.Provider value={{}}>
            {children}
        </FeatureFlagContext.Provider>

    )
}