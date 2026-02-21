import { useState } from "react";

export default function AuthToggle()
{
    const [isLoggedIn, setIsLoggrdIn] = useState(false);

    return(
        <div>
            <h2>
                {isLoggedIn ? "WellcomrBack" : "Please Login"}
            </h2>

            <button onClick={()=>setIsLoggrdIn(isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}