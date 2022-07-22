import React, { useEffect, useState } from "react";

function Header({ searchEvent }) {
    const [inputval, updateval] = useState("")
    useEffect(() => {//memakai useEffect agar langsung update jika tidak maka delay satu trigger
        searchEvent(inputval)
    },[inputval]) // jika kosong maka update terus makanya harus dikasi parameter hanya update jika [inputval] berubah
    return (
        <div className="note-app__header">
            <h2 className="note-header__title">Note App Custom</h2>
            <input className="note-header__search" onChange={(event) => {
                updateval(event.target.value)
            }} placeholder="Cari..." />
        </div>
    )

}

export default Header;