import { useState } from "react"

const quotes =[
    "Stay hungry, stay foolish.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency."
]

function RandomQuote()
{
    const [quote, setQuote] = useState([0]);

    const generateQuote  = ()=>{
        const randomIndex = Math.floor(Math.random() * quote.length);
        setQuote(quote[randomIndex]);
    }


    return(
        <>
            <h2>{quote}</h2>
      <button onClick={generateQuote}>New Quote</button>
        </>
    )
}

export default RandomQuote;