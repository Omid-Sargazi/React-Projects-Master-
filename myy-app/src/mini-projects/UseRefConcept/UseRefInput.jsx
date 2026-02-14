import { useRef } from "react"

export default function UseRefInput()
{
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render");


    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Form submitted");

        nameRef.current.focus();
    }
    return(
        <>
            <div style={{padding:20}}>
               <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label><br />
        <input type="text" ref={nameRef} onKeyDown={(e)=>{
            if(e.key==="Enter")
            {
                e.preventDefault();
                emailRef.current.focus();
            }
        }}/>
      </div>

      <br />

      <div>
        <label>Email</label><br />
        <input type="email" ref={emailRef} onKeyDown={(e)=>{
            if(e.key==="Enter")
            {
                e.preventDefault();
                passwordRef.current.focus();
            }
        }} />
      </div>

      <br />

      <div>
        <label>Password</label><br />
        <input type="password" ref={passwordRef} />
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
            </div>
        </>
    )
}