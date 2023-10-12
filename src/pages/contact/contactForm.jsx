import { Form } from "./form";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { StepOne, StepTwo, StepThree } from "./steps";

const steps = [StepOne, StepTwo, StepThree];
const ContactForm = () => {
  const { getFormProps, getNavigationProps, getStepProps } =
    useMultiStepForm(steps);

  const { formData, handleChange, isSubmitted } = getFormProps();
  const { currentStep, nextStep, prevStep, submitForm, resetForm } =
    getNavigationProps();
  const { isFirstStep, isLastStep } = getStepProps();

  if (isSubmitted) {
    return (
      <div>
        <h1>Thank you for submitting the form!</h1>
        <button
          onClick={resetForm}
          className="mt-3 px-8 py-1 bg-red-500 rounded-sm cursor-pointer"
        >
          Start Over
        </button>
      </div>
    );
  }

  const newHandleSubmit = (e) => {
    e.preventDefault();
    if (isLastStep) {
      submitForm();
    } else {
      nextStep();
    }
  };

  const Step = steps[currentStep];
  return (
    <div className="flex flex-col gap-5">
      <section className="">
        <Form handleSubmit={newHandleSubmit} currentStep={currentStep}>
          {
            <Step
              formData={formData}
              currentStep={currentStep + 1}
              handleChange={handleChange}
            />
          }
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
          type="submit"
          form="multi-step-form"
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </section>
    </div>
  );
};

export default ContactForm;
