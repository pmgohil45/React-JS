import React from "react";

const Hello = () => {
  // return(
  //     <div>
  //         <h1>Hello Prakash</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    { id: "hello", class: "hello", name: "hello" },
    React.createElement("h1", null, "Prakash Gohil")
  );
};

export default Hello;
