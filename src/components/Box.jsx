import PropTypes from "prop-types";

export const Box = ({ children }) => { 
    return (
        <div>
            {children}
        </div>
    );
};

Box.protoType = {
    children: PropTypes.node.isRequired
};