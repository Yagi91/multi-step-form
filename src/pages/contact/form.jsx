import PropTypes from "prop-types";
import Stepper from "./stepper/stepper";

export const Form = ({ children, handleSubmit, currentStep }) => {
  return (
    <form
      id="multi-step-form"
      onSubmit={handleSubmit}
      className="container relative rounded-md max-w-[1200px] px-7 py-12 flex flex-col gap-2 justify-center items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
    >
      <div className="w-full absolute top-0">
        <Stepper currentStep={currentStep + 1} />
      </div>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};
