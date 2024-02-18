import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserListe = () => {
    const [users,setUsers]= useState([]);

  useEffect(() => {
 axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
setUsers(result.data)})
  });

  return (
    <div>
      {users?.map((user)=> (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default UserListe
