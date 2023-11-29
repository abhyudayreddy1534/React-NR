import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Child 1 >> H1"),
    React.createElement("h2", { id: "heading" }, "I'm a short H2 from Child 1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Child 2 >> H1"),
    React.createElement(
      "h2",
      { id: "heading" },
      "I'm a short H2 from Child 2 "
    ),
    React.createElement("p",{ id: "heading" }, "It's a description about the tags used in the DOM")
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
