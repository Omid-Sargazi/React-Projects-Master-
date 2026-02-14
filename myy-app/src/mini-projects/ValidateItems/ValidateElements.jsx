import { useState } from "react"

export default function ValidateElements()
{
   
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    const [error, setErrors] =  useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const validate = ()=>{
        const newErrors ={};

        if(!form.name.trim())
        {
            newErrors.name = "name is necessary";
        }

        if(form.email.trim())
        {
            newErrors.email = "email is necessary";
        }

        if(!form.password.trim())
        {
            newErrors.password = "password is necessary.";
        }

        return newErrors;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const validationErrors = validate();

        if(Object.keys(validationErrors).length>0)
        {
            setErrors(validationErrors);
            setSuccess(false);
        }
        else
        {
            setErrors({});
            setSuccess(true);

            setForm({
                name:"",
                email:"",
                password:""
            })
        }
    }

   return(
    
         <>
    <div class="container">
            <h1>ثبت نام</h1>

            <form>
            <div>
                <label>نام</label>
                <input type="text"  name="name" onChange={handleChange} value={form.name}/>
                {error.name && <small class="error">{error.name}</small>}
            </div>

            <div>
                <label>ایمیل</label>
                <input type="email" name="email" onChange={handleChange} value={form.email} />
               {error.email && <small class="error">{error.email}</small>}
            </div>

            <div>
                <label>پسورد</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} />
                {error.password &&<small class="error">{error.password}</small>}
            </div>

            <button type="submit">ثبت نام</button>
            </form>

           
            {success &&  <p class="success">ثبت نام با موفقیت انجام شد</p>}

    </div>
        </>
    
   )
}