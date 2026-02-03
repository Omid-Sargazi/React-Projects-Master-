export default function Error({reset}:{reset:()=>void})
{
    return(
        <div>
            <p>Something went wrong.</p>
            <button onClick={reset}>Retry</button>
        </div>
    )
}

function Pagination({
    page,
    total,
    onNext,
    onPrev,
}:{
    page:number,
    total:number,
    onNext:()=>void;
    onPrev:()=>void;
})
{
    return (
        <div>
            <span>{page}/{total}</span>
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function SearchBox({
    value,
    onChange,
}:{
    value:string;
    onChange:(value:string)=>void;
})
{
    return(
        <div>
            <input value={value} 
            onChange={e=>onChange(e.target.value)}
            />
        </div>
    )
}


function Page2({
    params,
}:{
    params:{id:string}
})
{
    return <h1>Iser {params.id}</h1>
}