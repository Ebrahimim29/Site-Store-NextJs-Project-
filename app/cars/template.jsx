'use client'

import { useState } from "react";

const CarsLayout = ({children}) => {

    const [input, setInput] = useState("ok");

    return(
        <>
            
            {children}

            <div 
                style={{
                    backgroundColor:"blue",
                    width:"10rem",
                    cursor:"pointer",
                    height:"10rem",
                    position:"fixed",
                    top:"20rem",
                    left:"20rem",
                    borderRadius:"10rem",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"white",
                    flexDirection:"column",
                    gap:"1rem",
                    fontSize:"2rem"}} >
                
                <i className="fa fa-shopping-basket"></i>
                {/* کارت من */}
                {input}
                <input value={input} onChange={e=>setInput(e.target.value)}
                style={{position:"absolute", top:"80px", left:"0", color:"black"}}/>
            </div>
        </>
    )
};

export default CarsLayout;