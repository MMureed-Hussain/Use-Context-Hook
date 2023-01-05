import React, { useContext } from "react";
import { AppContext } from "../user/Contest";

export default function User({ user }) {
  const { dispatchUserEvent } = useContext(AppContext);
  const handleRemoveUser = () => {
    dispatchUserEvent("REMOVE_USER", { userId: user.id });
  };
  return (
    <>
      <div className="card">
        <h3 className="card-title bg-info m-1">{user.name}</h3>
        <h4 className="card-title bg-info m-1">{user.age}</h4>
        <div>
          <h6 className="card-title bg-info m-1">{user.bio}</h6>
        </div>
        <button className="bg-success text-light m-1" onClick={handleRemoveUser}>Delete user</button>
      </div>
    </>
  );
}
