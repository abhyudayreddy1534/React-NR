import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>⛔️Ooooooooooooppps⛔️</h1>
      <h2>Something went wrong!!! come back later!!!</h2>
      <h4>
        {error.status} : {error.statusText}
      </h4>
    </div>
  );
};

export default Error;
