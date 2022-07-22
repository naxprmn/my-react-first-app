import React from "react";
import NoteList from "./note-item_list";
import NoteInput from "./note-input.js";


function NoteBody({ data,deleteEvent, archiveEvent, addEvent }) {

    return (
        <div className="note-app__body">
            <NoteInput addEvent={addEvent}/>
            <h2>Catatan Aktif</h2>
            <NoteList data={data.filter((item)=>item.archived===false)} archiveEvent={archiveEvent} deleteEvent={deleteEvent} archiveTitle="Arsipkan"/>
            <h2>Arsip</h2>
            <NoteList data={data.filter((item)=>item.archived===true)} archiveEvent={archiveEvent} deleteEvent={deleteEvent} archiveTitle="Kembalikan"/>
        </div>
    )
}

export default NoteBody;