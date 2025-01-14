import React from "react";

const names: string[] = ["Alice", "Bob", "Charlie"];
const randomIndex = Math.floor(Math.random() * names.length);

function PostComponent(): React.JSX.Element {
  return (
    <div>
      <p>{names[randomIndex]}</p>
      <p>React is awesome</p>
    </div>
  );
}

export default PostComponent;
