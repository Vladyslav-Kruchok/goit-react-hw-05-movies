//React
import PropType from 'prop-types';
//Component
import { ListItem } from '../../components/ListItem';

export const Home = ({arr}) => { 
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
    arr: PropType.array.isRequired
}