import User from "./User";
import UserClass from "./UserClass";
import { useState, useEffect } from "react";

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    console.log(json.users);
    setUsers(json.users);
  };

  return (
    <div className="flex flex-wrap justify-center bg-slate-400">
      {users.map((u) => (
        <UserClass key={u.id} data={u} />
      ))}
      {/* <UserClass key={1} /> */}
    </div>
  );
};

export default About;
