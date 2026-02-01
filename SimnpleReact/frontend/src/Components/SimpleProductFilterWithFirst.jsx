import { useState, useEffect } from "react"
export default function SimpleProductFilterWithFirst()
{

    const [category, setCategory] = useState("all")
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

         const url = category === "all" ? "https://fakestoreapi.com/products":`https://fakestoreapi.com/products/category/${category}`;
   

    fetch(url,{})

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch(url, {signal:controller.signal})
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setLoading(false);
        })
        .catch(err=>{
            if(err.name!=="AbortError"){
                setError("Failed to load products")
                .setLoading(false);
            }
        });

        return ()=>{
            controller.abort()
        }
    },[category]);


    return(
        <>
            <div>
                    <h1>Products</h1>
                    <select value={category} onChange={e=>setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="electronics">Electrocics</option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                    </select>

                    <p>Loading...</p>

                    <ul>
                        {products.map(product=>(
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
            </div>
        </>
    )
}