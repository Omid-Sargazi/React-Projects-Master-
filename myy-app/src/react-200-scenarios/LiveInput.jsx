export default function LiveInput()
{
    const [name, setName] = useState("");
    
    return(
        <>
            <div>
                <input
                    type="text" value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <h3>{name}</h3>
            </div>
        </>
    )
}