import React, { useState } from 'react';
import Hasil from './hasil';
import Header from './header';
import SearchBox from './search-box';
import SearchButton from './search-button';

function App() {
    console.log('RENDER')
    const [keyword, setKeyword] = useState('');
    const searchEvent = (keyword) => setKeyword(keyword);

    return (
        <div className='body center'>
            <Header />
            <SearchBox searchEvent={searchEvent} />
            <SearchButton></SearchButton>
            <p>{!keyword !== '' ? 'MASUKAN KATA KUNCI' : `HASIL PENCARIAN : ${keyword}` }</p>
            <Hasil />
        </div>

    );
}

export default App;