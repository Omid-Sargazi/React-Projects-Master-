import { useState } from "react"

export default function ProductForm()
{
    const [form, setForm] = useState({
        name:"",
        price:""
    });

    const [items, setItems] = useState([]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.name.trim() || Number(form.price)<=0)
        {
            return;
        }

        const newProduct = {
            id:Date.now(),
            name:form.name,
            price:Number(form.price)
        };

        onAddProduct(newProduct);


        setForm({
            name:"",
            price:""
        })
    }

    function onAddProduct(product)
    {
        setItems(prev=>[...prev,product])
    }
    return(
        <>
                <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="product name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="price"
                            value={form.price}
                            onChange={handleChange}
                        />

                        <button type="submit">Add</button>
                </form> 
        </>
    )
}