import React from 'react';


function HasilRow({ nik, nama }) {
    return (
        <>
            <td>{nama}</td>
            <td>{nik}</td>
        </>
    );
}

export default HasilRow;