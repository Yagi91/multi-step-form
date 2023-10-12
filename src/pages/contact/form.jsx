// Importing PropTypes and Stepper component
import PropTypes from "prop-types";
import Stepper from "./stepper/stepper";

// Defining the Form component
export const Form = ({ children, handleSubmit, currentStep }) => {
  // The Form component returns a form element with a Stepper component and children
  return (
    <form
      id="multi-step-form"
      onSubmit={handleSubmit}
      className="container overflow-hidden relative rounded-md md:min-w-[800px] px-7 py-16 flex flex-col gap-2 justify-center items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
    >
      {/* The Stepper component is rendered at the top of the form */}
      <div className="w-full absolute top-0">
        <Stepper currentStep={currentStep + 1} />
      </div>
      {/* The children of the Form component are rendered below the Stepper */}
      {children}
    </form>
  );
};

// Defining the PropTypes for the Form component
Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};
