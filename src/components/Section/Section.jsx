import PropTypes from "prop-types";

export const Section = ({ children }) => { 
    return (
        <section>
            {children}
        </section>
    );
};

Section.protoType = {
    children: PropTypes.node.isRequired
};