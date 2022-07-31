//React
import { Outlet } from 'react-router-dom';
//Style
import { Container } from './Layout.styled';
//Components
import { AppBar } from '../../components/AppBar';

export const Layout = () => { 
    return (
        <Container>
            <AppBar />
            <Outlet/>
        </Container>
    );
};