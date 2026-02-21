import { useState } from "react"

export default function MultiForm()
{
    const [form, setForm] = useState({
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
            />

            <h4>{form.email}</h4>
        </>
    )
}