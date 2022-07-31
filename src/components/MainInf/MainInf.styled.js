import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    padding: 8px 16px;
    text-decoration: none;
    color: blue;
    font-weight: 500;

    &.active {
        color: violet;
    }
`;
export const SectionMainInfo = styled.section`
    display: flex;
`;