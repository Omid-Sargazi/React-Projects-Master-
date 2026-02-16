import { useState } from "react"

export default function ThemeToggle()
{
    const [dark, setDark] = useState(false);
    function toggleTheme()
    {
        setDark(d=>!d);
    }
    return(
        <>
            <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh"
    }}>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
        </>
    )
}