import React from "react";
import NoteItemButton from "./note-item_button";

function NoteItemContent({id, title, body, createdAt, deleteEvent, archiveEvent, archiveTitle}){
    return(
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <h4 className="note-item__date">{createdAt}</h4>
            <p className="note-item__body">{body}</p>
            <NoteItemButton id={id} deleteEvent={deleteEvent} archiveEvent={archiveEvent} archiveTitle={archiveTitle}/>
        </div>
    )
}

export default NoteItemContent;