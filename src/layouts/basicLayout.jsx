import PropTypes from 'prop-types';

const BasicLayout = ({ children }) => {
    return (
        <div className="flex border-2 justify-center items-center h-screen">
            <div className="w-full max-w-md">{children}</div>
        </div>
    );
};

BasicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BasicLayout;
