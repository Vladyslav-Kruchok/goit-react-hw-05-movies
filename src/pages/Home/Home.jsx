import { Box } from '../../components/Box';
import { HomeListItem } from '../../components/HomeListItem';

export const Home = ({arr}) => { 
    return (
        <Box>
            <h1>Trending today</h1>
            <ul>
                {arr.map(item => 
                    <HomeListItem id={item.id} film={item} key={item.id} />
                )}
            </ul>
        </Box>
    );
};