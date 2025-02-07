import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({children}: {children: React.ReactNode}) {
    
    function closeHandler() {
        const navigate = useNavigate()
        navigate('..')
    }
    return (<>
        <div className={classes.backdrop}  onClick={closeHandler} />
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>)
}

export default Modal;