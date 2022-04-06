import React, { createContext, useState } from "react";


export const Side = createContext();


const SideProvider = ({children})=>{
    const [side, setSide]=useState(false)
    return(
        <Side.Provider value={[side, setSide]}>
            {children}
        </Side.Provider>
    )
}
export default SideProvider