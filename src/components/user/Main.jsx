import React, { useState } from "react";
import { AppContext } from "../user/Contest";
import AddUser from "./AddUser";
import UserList from "./UserList";
import swal from 'sweetAlert'

export default function Main() {
  const [users, setUsers] = useState("");
  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([...users, payload.newUser]);
        swal('User added', '', 'Successfully');
        return;
        case "REMOVE_USER":
          setUsers(users.filter((user) => user.id !== payload.userId));
          swal('User deleted', '', 'Successfully');
        return;
      default:
        return;
    }
  };
  return (
    <AppContext.Provider value={{ users, dispatchUserEvent }}>
      <AddUser />
      <UserList />
    </AppContext.Provider>
  );
}
