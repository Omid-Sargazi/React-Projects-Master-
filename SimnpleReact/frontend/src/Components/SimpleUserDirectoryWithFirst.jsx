import { useEffect, useState, useMemo, useRef } from "react"
function SimpleUserDirectoryWithFirst() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 3;
  const inputRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          setError("Failed to load users");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, page]);

  useEffect(() => {
    setPage(1);
    inputRef.current?.focus();
  }, [search]);

  return (
    <div>
      <h1>User Directory</h1>

      <input
        ref={inputRef}
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {paginatedUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Prev
        </button>

        <span> Page {page} </span>

        <button
          disabled={page * pageSize >= filteredUsers.length}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SimpleUserDirectoryWithFirst;