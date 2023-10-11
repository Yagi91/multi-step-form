import PropTypes from "prop-types";
import { FormWrapper } from "../formWrapper";

const SubmitForm = ({ currentStep }) => {
  return (
    <FormWrapper
      title="Submit"
      summary="Please review your information before submitting"
      currentStep={currentStep}
    ></FormWrapper>
  );
};

SubmitForm.propTypes = {
  currentStep: PropTypes.number.isRequired,
  formData: PropTypes.object,
};

export default SubmitForm;
