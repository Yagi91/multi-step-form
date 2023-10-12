// Importing PropTypes library to define the props of the component
import PropTypes from "prop-types";

// Importing the background image
import bg from "../assets/bg.jpg";

// Defining the BasicLayout component
const BasicLayout = ({ children }) => {
  return (
    // The main container of the component
    <div
      // Using Tailwind CSS classes to style the container
      className={`flex justify-center p-4 sm:items-center h-screen bg-cover bg-center`}
      // Setting the background image of the container
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* The children of the component */}
      {children}
    </div>
  );
};

// Defining the propTypes of the BasicLayout component
BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporting the BasicLayout component as the default export of the file
export default BasicLayout;
