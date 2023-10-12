// Importing PropTypes and useEffect and useState hooks from React
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// This component is exported as a named export
export function FormWrapper({ title, summary, children, currentStep }) {
  // Using the useState hook to create a state variable called isVisible and its corresponding setter function setIsVisible
  const [isVisible, setIsVisible] = useState(false);

  // Using the useEffect hook to set the isVisible state variable to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // The component returns the following JSX
  return (
    <>
      {/* Displaying the current step */}
      <p className="text-xl text-gray-400">Step {currentStep}</p>
      {/* Displaying the title */}
      <h1 className="font-bold">{title}</h1>
      {/* Displaying the summary */}
      <p className="whitespace-pre-wrap sm:w-2/3">{summary}</p>
      {/* Displaying the children components */}
      <div
        className={`overflow-hidden mt-10 slide-in-left grid gap-y-2 gap-x-4 justify-start grid-cols-1 sm:grid-cols-2 slide-in-right ${
          isVisible ? "visible" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

// Defining the propTypes for the FormWrapper component
FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  children: PropTypes.node,
};
