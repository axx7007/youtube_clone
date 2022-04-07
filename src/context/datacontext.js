import React, { createContext, useState } from "react";
import { data } from "../mock/kino";


export const Kino = createContext();


const KinoContext=({children})=>{
  const [datacontext, setDataContext]=useState(data)
  return(
    <Kino.Provider value={[datacontext, setDataContext]}>
      {children}
    </Kino.Provider>
  )
}
export default KinoContext