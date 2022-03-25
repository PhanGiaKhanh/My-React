import React from "react";

function FirstComponents({ arr }) {
  return (
    <>
      {arr.map((element) => (
        <div key={element}>Fruit {element} </div>
      ))}
    </>
  );
}

export default FirstComponents;
