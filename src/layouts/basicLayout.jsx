import PropTypes from "prop-types";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex justify-center p-4 sm:items-center h-screen">
      {/* <div className="max-w-md">{children}</div> */}
      {children}
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
