import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <div>Test</div>
//     </>
//   );
// }


async function getUsers()
{
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"});

  return res.json();
  
}

export default async function Page()
{
  const users = await getUsers();

  return(
    <div>
      <h1>User Dashboard</h1>

      <ul>
        {users.map((user:any)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
