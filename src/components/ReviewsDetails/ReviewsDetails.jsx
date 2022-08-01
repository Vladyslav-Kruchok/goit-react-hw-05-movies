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