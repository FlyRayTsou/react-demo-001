import React from "react";

const names: string[] = ["Alice", "Bob", "Charlie"];

function PostComponent(): React.JSX.Element {
  const randomIndex = Math.floor(Math.random() * names.length);
  return (
    <div>
      <p>{names[randomIndex]}</p>
      <p>React is awesome</p>
    </div>
  );
}

export default PostComponent;
