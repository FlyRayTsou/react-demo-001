import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({onCloseModal, isModalOpen}: {onCloseModal: () => void, isModalOpen: boolean}) {

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
    }, []);
    const [ posts, setPosts ] = useState<{body: string, author: string}[]>([]);

    function addPostHandler(postData: {body: string, author: string}) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return <>
        {isModalOpen && <Modal onClose={onCloseModal}>
            <NewPost onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>}
        {posts.length > 0 && <ul className={classes.posts}>
            {posts.map((post, index) => <Post key={index} body={post.body} author={post.author} />)}
        </ul>}
        {posts.length === 0 && <p>No posts yet. Add one?</p>}

    </>
}

export default PostsList;