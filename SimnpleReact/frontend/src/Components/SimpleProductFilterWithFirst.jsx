import { useState, useEffect } from "react"
export default function SimpleProductFilterWithFirst()
{

    const [category, setCategory] = useState("all")
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(()=>setError("Failed to load categories"))
    },[]);

    
    return(
        <>
            <div>
                    <h1>Products</h1>
                    <select value={category} onChange={e=>setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option>Electrocics</option>
                    </select>

                    <p>Loading...</p>

                    <ul>
                        <li>Product title</li>
                    </ul>
            </div>
        </>
    )
}