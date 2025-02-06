import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({onCloseModal, isModalOpen}: {onCloseModal: () => void, isModalOpen: boolean}) {
    return <>
        {isModalOpen && <Modal onClose={onCloseModal}>
            <NewPost onCancel={onCloseModal} />
        </Modal>}
        <ul className={classes.posts}>
            <Post author="Mary" body="Full subscription"/>
        </ul>
    </>
}

export default PostsList;