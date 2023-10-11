import { Form } from "./form";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { StepOne, StepTwo, StepThree } from "./steps";

const steps = [StepOne, StepTwo, StepThree];
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

  if (isSubmitted) {
    return (
      <div>
        <h1>Thank you for submitting the form!</h1>
        <button onClick={resetForm}>Start Over</button>
      </div>
    );
  }

  const Step = steps[currentStep];
  console.log(formData);
  return (
    <div className="flex flex-col gap-5">
      <section className="">
        <Form handleSubmit={handleFormSubmit}>
          {<Step formData={formData} handleChange={handleChange} />}
        </Form>
      </section>
      <section className="flex gap-2 justify-end">
        {!isFirstStep && (
          <button
            className="border-2 px-8 py-1 rounded-sm"
            disabled={isFirstStep}
            onClick={prevStep}
          >
            Previous
          </button>
        )}
        <button
          className="px-8 py-1 bg-red-500 rounded-sm cursor-pointer"
          onClick={isLastStep ? submitForm : nextStep}
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </section>
    </div>
  );
};

export default ContactForm;
