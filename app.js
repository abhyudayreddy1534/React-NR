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
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
