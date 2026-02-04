export default async function UsersPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page ?? 1);
  const users = await getUsers(page);

  return (
    <div>
      <h1>Users – Page {page}</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        {page > 1 && <a href={`/users?page=${page - 1}`}>Prev</a>}{" "}
        <a href={`/users?page=${page + 1}`}>Next</a>
      </div>
    </div>
  );
}
