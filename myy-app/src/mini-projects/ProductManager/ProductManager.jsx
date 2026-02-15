import { useState } from "react"

export default function ProductManager()
{
    const [form,setForm] = useState({
        name:"",
        price:0,
    });

    const [product, setProduct] = useState("")
    const [items, setItems] = useState([]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const addItem = ()=>
    {

    }
    

    console.log(form);

    


    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <>
            <div>Add Product</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={form.name} onChange={handleChange} type="text" name="name" />
                </div>

                <div>
                    <label>Price</label>
                    <input value={form.price} onChange={handleChange} type="number" name="price"/>
                </div>

                <button>Add Item</button>

            </form>


        </>
    )
}