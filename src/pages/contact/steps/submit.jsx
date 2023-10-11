import PropTypes from "prop-types";
import { FormWrapper } from "../formWrapper";

const SubmitForm = () => {
  return (
    <FormWrapper
      title="Submit"
      summary="Please review your information before submitting"
    ></FormWrapper>
  );
};

SubmitForm.propTypes = {
  formData: PropTypes.object,
};

export default SubmitForm;
