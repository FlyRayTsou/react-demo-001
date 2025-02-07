import { Link } from 'react-router-dom';
import { useState } from 'react';

import Modal from '../components/Modal';

import classes from './NewPost.module.css'

function NewPost({onAddPost}: {onAddPost: (postData: {body: string, author: string}) => void}) {

    const [ bodyValue, setBodyValue ] = useState('');
    const [ authorValue, setAuthorValue ] = useState('');

    function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setBodyValue(event.target.value)
    }
    
    function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setAuthorValue(event.target.value)
    }

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const postData = {
            body: bodyValue,
            author: authorValue
        }
        onAddPost(postData);
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={changeBodyHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={changeAuthorHandler} />
                </p>
                <p className={classes.actions}>
                    <Link type="button" to="..">Cancel</Link>
                    <button type="submit">Post</button>
                </p>
            </form>
        </Modal>

    )
}

export default NewPost;