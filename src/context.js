import React,{useState,useEffect,useRef,useContext} from 'react'
import { useCallback } from 'react'

const AppContext = React.createContext()
const AppProvider=({children})=>{
    const[loading,setLoading] = useState(false)
    const[isModalOpen,setIsModalOpen] = useState(false)
    const OpenModal =()=>{
      setIsModalOpen(true)
    }
    const CloseModal =()=>{
      setIsModalOpen(false)
    }
    return(
        <AppContext.Provider
         value={{isModalOpen,OpenModal,CloseModal}}> {children}

        </AppContext.Provider>
    )
}
// custom hook
export const useGlobalContext=()=>{
   return useContext(AppContext)
}
export{AppContext,AppProvider}




