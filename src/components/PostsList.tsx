import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return <ul className={classes.posts}>
      <Post author="Mark" body="React is awesome"/>
      <Post author="Mary" body="Full subscription"/>
    </ul> 
}

export default PostsList;