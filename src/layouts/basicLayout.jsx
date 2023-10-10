import PropTypes from "prop-types";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex border-2 justify-center items-center h-screen">
      {/* <div className="max-w-md">{children}</div> */}
      {children}
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
