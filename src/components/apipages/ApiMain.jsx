// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ApiList from "./ApiList";
import { AppUserContext } from "./ContextApi";

export default function ApiMain() {
  const [user, setUser] = useState([]);

  const getUsersData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setUser(res.data);
      console.log("data" ,res.data);
    });
  };
  const usersDeleteId = async (id) => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method:"DELETE"
    }).then((res) => {
      setUser(user.filter((usr) => usr.id !==id));
      swal('User deleted', '', 'Successfully');
     
    });
  };
  const handleUsersId = (id) => {
 const response = window.confirm(`do you want to delete user with id ${id}?`)
 if(response){
  usersDeleteId(id);
 }
  }
  useEffect(() => {
    // console.log('useeffect run')
      getUsersData();
  }, [setUser]);
  return (
    <AppUserContext.Provider value={[user , handleUsersId]}>
      <ApiList  />
      {/* <ApiList user={user} handleUsersId={usersDeleteId} /> */}
    </AppUserContext.Provider>
  );
}
