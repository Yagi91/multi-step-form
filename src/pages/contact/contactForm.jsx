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
    <div className="flex flex-col gap-5">
      <section className="">
        <Form handleSubmit={handleFormSubmit}>{step}</Form>
      </section>
      <section className="flex gap-2 justify-end">
        {!isFirstStep && (
          <button disabled={isFirstStep} onClick={prevStep}>
            Previous
          </button>
        )}
        <button
          className="px-8 py-1 bg-red-500 rounded-sm"
          disabled={isLastStep}
          onClick={nextStep}
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default ContactForm;
