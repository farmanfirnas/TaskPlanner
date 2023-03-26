import React from "react"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import Homepage from "../Pages/Homepage"
export const AllRoutes=()=>{
    return(
        <Routes>

            <Route path="/" element={<Homepage/>}/>
            <Route path="/dashboard/*" element={<Dashboard/>} />
           
            
        </Routes>
    )
}