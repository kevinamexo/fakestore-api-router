import React, {useState, createContext, useContext, useEffect} from 'react'


export const ScreenSizeContext= createContext()

export const ScreenSizeProvider=({children})=>{

    const [width, setWidth]= useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(()=>{
        window.addEventListener("resize", ()=>setWidth(window.innerWidth))

    },[])


    return(
        <ScreenSizeContext.Provider value={{width}}>
            {children}
        </ScreenSizeContext.Provider>
    )



}

export const useScreenSizeValue=()=>useContext(ScreenSizeContext)

