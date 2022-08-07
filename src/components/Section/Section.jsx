import PropTypes from "prop-types";

const Section = ({ children }) => { 
    return (
        <section>
            {children}
        </section>
    );
};

Section.protoType = {
    children: PropTypes.node.isRequired
};

export default Section;