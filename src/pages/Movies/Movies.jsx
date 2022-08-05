//React
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Searchbar } from 'components/Searchbar';
//Style
import { ListItem } from '../../components/ListItem';

//API
import { tmdbMovieAPI } from 'api/tmdbAPI';

export const Movies = () => {
    const [searchVal, setSearchVal] = useState(() => "");
    const [searchParams, setSearchParams] = useSearchParams(() => "");
    const [movArr, setMovArr] = useState(null);

    useEffect(() => {
        if (!searchVal) return;
        const searchByName = tmdbMovieAPI('search/movie', 1, searchVal);
        searchByName.then(value => {
            setMovArr(value.movData);
            setSearchParams({query: searchVal}, { replace: true });
        })
    }, [searchVal, setSearchParams]);

    const getDataExtForm = (data) => { 
        setSearchVal(data);
    };
    console.log(searchParams.get('query'));
    return (
        <main>
            <Searchbar onSubmit={getDataExtForm} /> 
            {movArr &&
                <ul>
                    {movArr.map(item => 
                        <ListItem id={item.id} film={item} key={item.id} />
                    )}
                </ul>
            }
        </main>
    );
};