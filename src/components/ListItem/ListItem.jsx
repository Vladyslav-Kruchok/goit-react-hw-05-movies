import PropType from 'prop-types';
import { Link } from 'react-router-dom';

export const ListItem = ({ film: { id, name, title } }) => { 
return (
    <>
        <li>
            <Link to={`/movies/${id}`}>{name || title}</Link>
        </li>
    </>
    );
};
ListItem.prototype = {
    film: PropType.shape({
        id: PropType.number.isRequired,
        name:PropType.string.isRequired,
        title: PropType.string.isRequired
    })
};