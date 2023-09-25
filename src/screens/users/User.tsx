import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

export const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>
        User with {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to={"followers"}>SeeFollowers</Link>
      <Outlet
        context={{
          nameOfUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};
