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
      setEnableFlags(res)
      setLoading(true)
    }catch(error){
        console.log(error);
        throw new Error(error)
        setLoading(false)
    }
   }



   useEffect(()=>{
    fetchFeatureFlags()
   },[])

    return (
        <FeatureFlagContext.Provider value={{loading, enableFlags}}>
            {children}
        </FeatureFlagContext.Provider>

    )
}