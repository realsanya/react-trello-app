import React from 'react';
import './styles.css';

const Modal = ({ active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal" } onClick={() => setActive(false)}>
            <div className={active ? "modal-content active" : "modal-content" } onClick={(ev) => ev.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;