import PropTypes from 'prop-types';

const Snippet = ({ text }) => { 
    return (
        <div>{text}</div>
    );
};

Snippet.protoType = {
    text: PropTypes.string.isRequired
};

export default Snippet;