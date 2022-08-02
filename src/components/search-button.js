import React from 'react';

function SearchButton() {
    const clicked = ()=> console.log("CLICKKKK")
    return (
        <div className='buttons'>
            <button onClick={()=>clicked()} className="button" type="submit">CARI NIK</button>
        </div>
    );
}

export default SearchButton;