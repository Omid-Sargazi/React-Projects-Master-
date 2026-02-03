export default function Error({reset}:{reset:()=>void})
{
    return(
        <div>
            <p>Something went wrong.</p>
            <button onClick={reset}>Retry</button>
        </div>
    )
}