import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({onCloseModal, isModalOpen}: {onCloseModal: () => void, isModalOpen: boolean}) {
    const [ posts, setPosts ] = useState<{body: string, author: string}[]>([]);
    const [ isFetching, setIsFetching ] = useState(false);
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, []);


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
        {!isFetching && posts.length > 0 && <ul className={classes.posts}>
            {posts.map((post, index) => <Post key={index} body={post.body} author={post.author} />)}
        </ul>}
        {!isFetching &&posts.length === 0 && <p>No posts yet. Add one?</p>}
        {isFetching && <p>Loading...</p>}
    </>
}

export default PostsList;