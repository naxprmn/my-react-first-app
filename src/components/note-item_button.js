import React from "react";

function NoteItemButton({id, deleteEvent, archiveEvent, archiveTitle}){
    return (
        <div className="note-item__action">
            <button onClick={()=>deleteEvent(id)} className="note-item__delete-button">Delete</button>
            <button onClick={()=>archiveEvent(id)} className="note-item__archive-button">{archiveTitle}</button>
        </div>
    )
}

export default NoteItemButton;