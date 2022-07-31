import { Link } from 'react-router-dom';

export const HomeListItem = ({ film: { id, name, title }, onClick }) => { 
return (
    <>
        <li>
            <Link to={`/movies/${id}`} onClick={onClick}>{name || title}</Link>
        </li>
    </>
    );
};
