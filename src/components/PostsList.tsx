import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
    const [ bodyValue, setBodyValue ] = useState('');
    const [ authorValue, setAuthorValue ] = useState('');
    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setBodyValue(event.target.value)
    }
    function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setAuthorValue(event.target.value)
    }

    return <>
        <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
        <ul className={classes.posts}>
            <Post author={authorValue} body={bodyValue}/>
            <Post author="Mary" body="Full subscription"/>
        </ul>
    </>
}

export default PostsList;