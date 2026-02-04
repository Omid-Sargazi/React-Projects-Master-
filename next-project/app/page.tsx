import Image from "next/image";
import UserSearch from "./UserSearch";

// export default function Home() {
//   return (
//     <>
//     <div>Test</div>
//     </>
//   );
// }

type User =
{
  id:number;
  name:string;
}


async function getUsers(page:number):Promise<User[]>
{
  const limit = 5;
  const start = (page-1) * limit;


  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${limit}`,{cache:"no-store"});

  return res.json();
  
}

// export default async function Page({
//   searchParams,
// }:{searchParams:{page?:string};})
// {
//   const page = Number(searchParams.page ?? 1);
//   const users = await getUsers(page);

//   return(
//     <div>
//       <h1>User Dashboard</h1>
//       <h1>Users(Page {page})</h1>

//       <ul>
//         {users.map(user=>(
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//       <a href={`/?page=${page-1}`}>Prev</a>{" "}
//       <a href={`/?page=${page+1}`}>Next</a>

//       {/* <ul>
//         {users.map((user:any)=>(
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul> */}

//       <UserSearch users={users}/>
//     </div>
//   )
// }



"use client";

import { loginAction } from "./loginAction";
import { useAuth } from "./AuthProvider";

export default function Page() {
  const { user, login, logout } = useAuth();

  if (!user) {
    return (
      <form
        action={async (formData) => {
          const user = await loginAction(formData);
          login(user);
        }}
      >
        <h1>Login</h1>
        <input name="username" placeholder="Username" />
        <button type="submit">Login</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
