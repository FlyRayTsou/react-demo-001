import classes from "./Post.module.css";

function PostComponent(props: { author: string; body: string }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p>{props.body}</p>
    </li>
  );
}

export default PostComponent;
