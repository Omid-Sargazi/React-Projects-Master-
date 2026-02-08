import { useState } from "react";

const PRODUCTS = [
    {id:1,title:"Laptop",price:1000},
    {id:2,title:"Phone",price:500},
    {id:3,title:"Headphones",price:200},
]

export default function ProductCartApp()
{
    const [cart, setCart] = useState([]);

    function addToCart(product)
    {
        setCart(prev=>[...prev,product]);
    }

    const totalPrice = cart.reduce((sum,item)=>sum+item.price,0);


    
  return (
    <div>
      <h2>Products</h2>

      {PRODUCTS.map(product => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>Price: {product.price}</p>
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}