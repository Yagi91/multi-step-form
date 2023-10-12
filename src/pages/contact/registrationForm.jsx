/**
 *
 * @typedef {Object} FormData - An object containing form data
 * @property {string} name - The name of the user
 * @property {string} email - The email of the user
 * @property {string} message - The message of the user
 *
 * @typedef {Object} StepProps - An object containing step properties
 * @property {boolean} isFirstStep - A boolean indicating if the current step is the first step
 * @property {boolean} isLastStep - A boolean indicating if the current step is the last step
 *
 * @typedef {Object} FormProps - An object containing form properties
 * @property {FormData} formData - An object containing form data
 * @property {function} handleChange - A function to handle form data changes
 * @property {boolean} isSubmitted - A boolean indicating if the form has been submitted
 *
 * @typedef {Object} NavigationProps - An object containing navigation properties
 * @property {number} currentStep - The current step number
 * @property {function} nextStep - A function to go to the next step
 * @property {function} prevStep - A function to go to the previous step
 * @property {function} submitForm - A function to submit the form
 * @property {function} resetForm - A function to reset the form
 *
 * @typedef {Object} MultiStepForm - An object containing form, navigation and step properties
 * @property {function} getFormProps - A function to get form properties
 * @property {function} getNavigationProps - A function to get navigation properties
 * @property {function} getStepProps - A function to get step properties
 *
 * @typedef {Object} Props - An object containing component properties
 * @property {function} handleSubmit - A function to handle form submission
 * @property {number} currentStep - The current step number
 *
 * @typedef {Object} StepComponent - A component representing a step in the form
 * @property {FormData} formData - An object containing form data
 * @property {number} currentStep - The current step number
 * @property {function} handleChange - A function to handle form data changes
 *
 * @typedef {Object} ContactFormProps - An object containing contact form properties
 *
 * @returns {JSX.Element} - A JSX element representing the contact form
 */
import { Form } from "./form";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { StepOne, StepTwo, StepThree } from "./steps";

const steps = [StepOne, StepTwo, StepThree];

const RegistrationForm = () => {
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

  /**
   * A function to handle form submission
   *
   * @param {Event} e - The form submission event
   */
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

export default RegistrationForm;
