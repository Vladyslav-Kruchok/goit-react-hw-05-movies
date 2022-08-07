//React
import PropType from 'prop-types';
import { useEffect } from 'react';
//Component
import ListItem from 'components/ListItem/ListItem.jsx';

const Home = ({arr, setHistory}) => { 
    useEffect(() => { 
        setHistory("/");
    }, [setHistory]);
    return (
        <main>
            <h1>Trending today</h1>
            <ul>
                {arr &&
                    arr.map(item => 
                    <ListItem id={item.id} film={item} key={item.id} />
                )}
            </ul>
        </main>
    );
};
Home.protoType = {
    arr: PropType.array.isRequired,
    setHistory: PropType.func.isRequired
}

export default Home;