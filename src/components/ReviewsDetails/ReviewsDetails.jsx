//React
import PropType from 'prop-types';
//Style
import { PtegReviewInfo } from "./ReviewsDetails.styled.js";

export const ReviewsDetails = ({reviewItem: {author, content}}) => { 

    return (
        <li>
            <PtegReviewInfo>{author}</PtegReviewInfo>
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