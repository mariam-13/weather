import React from 'react';
import './modal.scss';
const Modal = ({ children, title, closeModal }) => {

    return (
        <div className="modal-text">
            <button onClick={() => { closeModal(false) }}>X</button>
            <div>
                {title}

            </div>

            <div>
                {children}
            </div>



        </div>
    );
};

export default Modal;