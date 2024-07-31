import { createContext } from "react"






export const FeatureFlagContext = createContext(null)

export default function FeatureFlagGobalState({children}){
    return (
        <FeatureFlagContext.Provider value={{}}>
            {children}
        </FeatureFlagContext.Provider>

    )
}