import { Form } from "./form";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { StepOne, StepTwo, StepThree } from "./steps";

const steps = [
  <StepOne key="step1" />, //The key prop is required when rendering an array of elements. The key prop is used by React to track which items in the DOM have changed and which should be updated. If you don't use the key prop when rendering an array of elements, React will warn you with the following message: Each child in a list should have a unique "key" prop.
  <StepTwo key="step2" />,
  <StepThree key="step3" />,
];
const ContactForm = () => {
  const { getFormProps, getNavigationProps, getStepProps } =
    useMultiStepForm(steps);

  const { handleSubmit, formData, handleChange, isSubmitted } = getFormProps();
  const { currentStep, nextStep, prevStep, submitForm, resetForm } =
    getNavigationProps();
  const { isFirstStep, isLastStep, step } = getStepProps();

  console.log(currentStep, isFirstStep, isLastStep);
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <section>
        <Form handleSubmit={handleFormSubmit}>{step}</Form>
      </section>
      <section>
        {!isFirstStep && (
          <button disabled={isFirstStep} onClick={prevStep}>
            Previous
          </button>
        )}
        <button disabled={isLastStep} onClick={nextStep}>
          Next
        </button>
      </section>
    </div>
  );
};

export default ContactForm;
