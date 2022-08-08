import React, { useState } from 'react';
import { getInitialData } from '../utils/data';
import Hasil from './hasil';
import Header from './header';
import SearchBox from './search-box';
import SearchButton from './search-button';

function App() {
    const data = getInitialData();
    console.log('RENDER')
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');

    const searchFunction = (keyword) => {
        setKeyword(keyword);
        const temp = [...data];
        const searchItem = temp.filter((item) => {
            if (item.NAMA.toLowerCase().includes(keyword.toLowerCase())) {
                console.log(`Keyword : ${typeof(keyword)} || Nik : ${typeof(item.nik)}`)
                return item;
            } else if (item.nik.includes(keyword)){
                return item;
            }
            return null;
        })
        setSearchResult(searchItem)
    }

    const displayData = () => {
        if (searchResult.length===0&&keyword.length===0) {
            return data;
        } return searchResult;
    }

    return (
        <div className='body center'>
            <Header />
            <SearchBox searchEvent={searchFunction} />
            <SearchButton></SearchButton>
            <p>{!keyword != '' ? 'MASUKAN KATA KUNCI' : `HASIL PENCARIAN : ${keyword}` }</p>
            <Hasil data={displayData()}/>
        </div>

    );
}

export default App;