import ProductItem from "./ProductItem"

export default function ProductList({items, onDelete})
{
    if(items.length====0)
    {
        return <p>No product has been added yet.</p>
    }
    return(
        <>
        <ul>
            {items.map(item=>(
                <ProductItem
                    key={item.id}
                    product={item}
                    onDelete={onDelete}
                />
            ))}
        </ul>
        </>
    )
}