// Importing PropTypes library to define the data types of props
import PropTypes from "prop-types";

// Importing FormWrapper component from the same directory
import { FormWrapper } from "../formWrapper";

// Defining the SubmitForm component
const SubmitForm = ({ currentStep }) => {
  // Returning the FormWrapper component with some props
  return (
    <FormWrapper
      title="Submit"
      summary="Please review your information before submitting"
      currentStep={currentStep}
    ></FormWrapper>
  );
};

// Defining the data types of props for the SubmitForm component
SubmitForm.propTypes = {
  currentStep: PropTypes.number.isRequired,
  formData: PropTypes.object,
};

// Exporting the SubmitForm component as the default export of this module
export default SubmitForm;
