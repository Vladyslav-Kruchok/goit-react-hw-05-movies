//React
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//Style
import { Container } from './Layout.styled';
//Components export default
//import AppBar from 'components/AppBar/AppBar.jsx';


//Dynamic import
const AppBar = lazy(() => import('components/AppBar/AppBar.jsx' /* webpackChunkName: "AppBar" */));

const Layout = () => { 
    return (
        <Container>        
            <Suspense>
                <AppBar />
            </Suspense>
            <Outlet />
        </Container>
    );
};

export default Layout;