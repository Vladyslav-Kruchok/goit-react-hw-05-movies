//Style
import { Header, Link } from './AppBar.styled';

export const AppBar = () => { 
    return (
        <Header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
    );
};