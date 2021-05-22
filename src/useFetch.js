import {useState, useEffect} from 'react'
export const useFetch=(url,options)=>{
    const [response, setResponse]=useState(null)
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(false)
    
    useEffect(()=>{
        const fetchData= async()=>{
            setLoading(true)
            const controller= new AbortController()
            const {signal}= controller
            try{
               const res= await fetch(url, options) 
               const json= await res.json()
               if (!signal.abort){
                   setResponse(json)
                   setLoading(false)
               }
            } catch(error){
                if(!signal.abort){
                    setError(error)
                    setLoading(false)

                }
            }
        } 
        fetchData()
    },[])



    return {response, error,loading}
}



export default useFetch