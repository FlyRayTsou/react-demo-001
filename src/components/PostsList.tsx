import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import classes from './PostsList.module.css';

function PostsList() {
    const posts: {body: string, author: string}[] = useLoaderData();

    return <>
        {posts.length > 0 && <ul className={classes.posts}>
            {posts.map((post, index) => <Post key={index} body={post.body} author={post.author} />)}
        </ul>}
        {posts.length === 0 && <p>No posts yet. Add one?</p>}
    </>
}

export default PostsList;