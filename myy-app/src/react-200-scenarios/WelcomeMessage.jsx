import { useEffect } from "react";

export default function WelcomeMessage()
{
    useEffect(()=>{
        console.log("Component Mounted...")
    },[])

    return<h2>Welcome to the Dashboard</h2>
}