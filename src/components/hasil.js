import React from 'react';
import HasilRow from './hasil-row';

function Hasil({ data }) {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>NIK</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value) => {
                            return <tr key={value.nik}>{<HasilRow nama={value.NAMA} nik={value.nik}/>}</tr>
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Hasil;