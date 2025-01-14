function PostComponent(props: { author: string; body: string }) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default PostComponent;
