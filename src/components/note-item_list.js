import React from "react";
import NoteItemContent from "./note-item_content";

function NoteList({ data, deleteEvent, archiveEvent, archiveTitle }) {
    function returnData() {
        if (data.length !== 0) {
            return <div className="notes-list">
                {data.map(
                    (item) => <div className="note-item" key={item.id}>
                        <NoteItemContent {...item} deleteEvent={deleteEvent} archiveEvent={archiveEvent} archiveTitle={archiveTitle} /></div>
                )}
            </div>
        } else {
            return <div className="notes-list__empty-message">Tidak ada catatan</div>
        }
    }
    return (
        returnData()
    )
}

export default NoteList;