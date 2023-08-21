import React,{useState,useEffect,useRef,useContext} from 'react'
import { useCallback } from 'react'

const AppContext = React.createContext()
const AppProvider=({children})=>{
    const[loading,setLoading] = useState(false)
    return(
        <AppContext.Provider
         value={{loading}}> {children}

        </AppContext.Provider>
    )
}
// custom hook
export const useGlobalContext=()=>{
   return useContext(AppContext)
}
export{AppContext,AppProvider}




