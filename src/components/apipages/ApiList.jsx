import React, { useContext } from "react";
import { AppUserContext } from "./ContextApi";

export default function ApiList() {
  const [user] = useContext(AppUserContext)

  return (
    <>
      <h3>Available Users Here</h3>
      {user && user.map(usr => <div className="card m-4" style={{borderColor:"green",borderSize:"3px"}} key={usr.id}>
        <div className="card-id bg-warning m-1">{usr.id}</div>
        <div className="card-title bg-info m-1">{usr.title}</div>
        <div className="card-body">{usr.body}</div>
        {/* <button className="bg-success text-light m-1" onClick={}>Delete user</button> */}
        </div>)}
      
    </>
  );
}
