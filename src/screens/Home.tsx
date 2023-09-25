import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

export const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.get("hey"));

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
