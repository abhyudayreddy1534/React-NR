import React from "react";
import ReactDOM from "react-dom/client";

// JSX component

const heading = (
  <h1 className="heading" id="heading">
    This is my React learning with JSX
  </h1>
);

const Title = () => (
  <h1 className="heading">Welcome to React learning hub 👨🏻‍💻</h1>
);

const Content = () => {
  return (
    <div className="contentDiv">
      <Title />
      <h2>We are getting there !!! 🚀</h2>
      <p className="content" id="content">
        Here you will be learninng how the React functions and you will get to
        know the practical approach of React
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Content />);
