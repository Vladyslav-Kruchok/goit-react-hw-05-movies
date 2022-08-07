//React
import PropType from 'prop-types';

const ReviewsDetails = ({reviewItem: {author, content}}) => { 
    return (
        <li>
            <h1>{author}</h1>
            <p>{content}</p>
        </li>
    );
};

ReviewsDetails.protoType = {
    reviewItem: PropType.shape({
        author: PropType.string.isRequired,
        content: PropType.string.isRequired
    })
};

export default ReviewsDetails;