import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import '../index.css';
import Modal from './PopUp';

function Note({ id, text, date, handleDelete }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()}, ${currentDate.toLocaleTimeString()}`;

    const handleDeleteClick = () => {
        setShowConfirmation(true);
    };

    const handleConfirmDelete = () => {
        handleDelete(id);
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{formattedDate}</small>
                <MdDeleteForever onClick={handleDeleteClick} className="delete-icon" size="1.3em" />
            </div>
            <Modal
                show={showConfirmation}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}

export default Note;
