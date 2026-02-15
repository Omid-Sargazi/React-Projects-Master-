export default function ProductItem({product,onDelete})
{

    return(
        <>
            <span>
                {product.name} - {product.price}
            </span>

            <button onDelete={()=>onDelete(product.id)}>Delete</button>
        </>
    )
}