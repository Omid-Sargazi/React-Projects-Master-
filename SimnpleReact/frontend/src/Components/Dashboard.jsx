import { useEffect, useState } from "react"

export default function Dashboard()
{
    const [state, setState] = useState(0);
    useEffect(()=>{
        console.log("User entered dashboard...");
       },[]); 
        return(<>
            <p>login count:{state}</p>
                  <button onClick={() => setState(prev => prev + 1)}>
        Login
      </button>

        </>)
    
  
}