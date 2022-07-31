import { HomeListItem } from '../../components/HomeListItem';

export const Home = ({arr, onClick}) => { 
    return (
        <main>
            <h1>Trending today</h1>
            <ul>
                {arr && arr.map(item => 
                    <HomeListItem id={item.id} film={item} onClick={onClick} key={item.id} />
                )}
            </ul>
        </main>
    );
};