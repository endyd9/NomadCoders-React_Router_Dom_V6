import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfUser: string;
}

export const Followers = () => {
  const { nameOfUser } = useOutletContext<FollowersContext>();

  return (
    <div>
      <h1>{nameOfUser}'s Followers</h1>
    </div>
  );
};
