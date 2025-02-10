import { Link } from "react-router-dom";

import classes from "./Post.module.css";

function PostComponent({ id, author, body }: { id: string; author: string; body: string }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p>{body}</p>
      </Link>
    </li>
  );
}

export default PostComponent;
