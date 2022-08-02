import React from "react";

function SearchBox({ searchEvent }) {
    return (
        <div className="bar">
            <input className="searchbar" type="text" title="Search" onChange={(event) => {
                searchEvent(event.target.value)
            }} />
        </div>
    )
}

export default SearchBox;