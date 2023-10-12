import { useState } from "react";

/**
 * A custom hook for implementing multi-step forms.
 * @param {Array} steps - An array of objects representing each step of the form.
 * @returns {Object} An object containing functions and properties to be used in the form.
 */
export function useMultiStepForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Function to move to the next step of the form.
   */
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  /**
   * Function to move to the previous step of the form.
   */
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  /**
   * Function to submit the form data.
   */
  const submitForm = () => {
    console.log("Form data", formData);
    setIsSubmitted(true);
  };

  /**
   * Function to reset the form to its initial state.
   */
  const resetForm = () => {
    setCurrentStep(0);
    setFormData({});
    setIsSubmitted(false);
  };

  /**
   * Function to handle changes in the form data.
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //Replace the existing value with the new one
  };

  /**
   * Function to handle form submission.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first check");
    if (isLastStep()) {
      submitForm();
      console.log("second check");
      return;
    }
    nextStep();
  };

  /**
   * Function to check if the current step is the last step of the form.
   * @returns {Boolean} True if the current step is the last step, false otherwise.
   */
  const isLastStep = () => {
    return currentStep === steps.length - 1;
  };

  /**
   * Function to check if the current step is the first step of the form.
   * @returns {Boolean} True if the current step is the first step, false otherwise.
   */
  const isFirstStep = () => {
    return currentStep === 0;
  };

  /**
   * Function to get the form properties to be used in the form.
   * @returns {Object} An object containing the form data, handleChange function, handleSubmit function, and isSubmitted property.
   */
  const getFormProps = () => {
    return {
      formData,
      handleChange,
      handleSubmit,
      isSubmitted,
    };
  };

  /**
   * Function to get the navigation properties to be used in the form.
   * @returns {Object} An object containing the current step, nextStep function, prevStep function, submitForm function, and resetForm function.
   */
  const getNavigationProps = () => {
    return {
      currentStep,
      nextStep,
      prevStep,
      submitForm,
      resetForm,
    };
  };

  /**
   * Function to get the step properties to be used in the form.
   * @returns {Object} An object containing the current step, the step object for the current step, and boolean values indicating whether the current step is the first or last step.
   */
  const getStepProps = () => {
    return {
      currentStep,
      step: steps[currentStep],
      isLastStep: isLastStep(),
      isFirstStep: isFirstStep(),
    };
  };

  return {
    getFormProps,
    getNavigationProps,
    getStepProps,
  };
}
