//React
import PropType from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

//Components export default
import Searchbar from 'components/Searchbar/Searchbar.jsx';
import ListItem from 'components/ListItem/ListItem.jsx';

//API
import { tmdbMovieAPI } from 'api/tmdbAPI';

const Movies = ({setHistory}) => {
    const [searchVal, setSearchVal] = useState(() => '');
    const [movArr, setMovArr] = useState(null);
    
    const [searchUrlQuery, setSearchUrlQuery] = useState(() => '');
    const [searchParams, setSearchParams] = useSearchParams(() => '');
    
    const { pathname, search } = useLocation();


    useEffect(() => {
        setSearchUrlQuery(searchParams.get('query'));
        setSearchVal(searchVal || searchUrlQuery);

        if (!searchVal) return;

        const searchByName = tmdbMovieAPI('search/movie', 1, searchVal || searchUrlQuery);
        searchByName.then(value => {
            setMovArr(value.movData);
            setSearchParams({query: searchVal}, { replace: true });
        })

        console.log()
    }, [searchVal, searchParams, setSearchParams, searchUrlQuery]);
    
    useEffect(() => {
        searchParams && setHistory(pathname + search);
    }, [searchParams, setHistory, pathname, search]);

    const getDataExtForm = (data) => { 
        setSearchVal(data);
    };

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

Movies.protoType = {
    arr: PropType.array.isRequired,
    setHistory: PropType.func.isRequired
}

export default Movies;