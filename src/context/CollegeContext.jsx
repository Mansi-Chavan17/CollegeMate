import { createContext, useState, useEffect} from "react"
import axios from 'axios'

export const CollegeContext=createContext() 
const CollegeContextProvider = ({children}) => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try{
                const res=await axios.get("https://collegemate-392e2-default-rtdb.firebaseio.com/colleges.json")
                setData(res.data)
                setLoading(false)
            }catch(error){
                setError(error.message)
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
    <CollegeContext.Provider value={{data,loading,error}}>
        {children}
    </CollegeContext.Provider>
  )
}

export default CollegeContextProvider