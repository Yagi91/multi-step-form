import { useState } from "react";

export function useMultiStepForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({});
    setIsSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //Replace the existing value with the new one
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const isLastStep = () => {
    return currentStep === steps.length - 1;
  };

  const isFirstStep = () => {
    return currentStep === 0;
  };

  const getFormProps = () => {
    return {
      formData,
      handleChange,
      handleSubmit,
      isSubmitted,
    };
  };

  const getNavigationProps = () => {
    return {
      currentStep,
      nextStep,
      prevStep,
      submitForm,
      resetForm,
    };
  };

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
