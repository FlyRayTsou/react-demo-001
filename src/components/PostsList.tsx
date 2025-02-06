import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({onCloseModal, isModalOpen}: {onCloseModal: () => void, isModalOpen: boolean}) {
    const [ posts, setPosts ] = useState<{body: string, author: string}[]>([]);

    function addPostHandler(postData: {body: string, author: string}) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return <>
        {isModalOpen && <Modal onClose={onCloseModal}>
            <NewPost onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>}
        <ul className={classes.posts}>
            {posts.map((post, index) => <Post key={index} body={post.body} author={post.author} />)}
        </ul>
    </>
}

export default PostsList;