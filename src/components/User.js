import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>
        Name : {name} **** {count}
      </h2>
      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;
