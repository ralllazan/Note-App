import React from 'react';
import '../index.css';

const Modal = ({ show, onClose, onConfirm }) => {
    return (
        show && (
            <div className="modal-overlay">
                <div className="note">
                    <p>Are you sure you want to delete this note?</p>
                    <div className="modal-buttons">
                        <button className="save" onClick={onConfirm}>Yes</button>
                        <button className="save" onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
