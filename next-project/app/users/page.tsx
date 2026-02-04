type User={
    id:number,
    name:string,
}

async function getUsers(page:number):Promise<User[]>
{
    const limit = 5;
    const start = (page -1) * limit;

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`,
    { cache: "no-store" }
    )

    return res.json();
}