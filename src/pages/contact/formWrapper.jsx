import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function FormWrapper({ title, summary, children, currentStep }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <p className="text-xl text-gray-400">Step {currentStep}</p>
      <h1 className="font-bold">{title}</h1>
      <p className="whitespace-pre-wrap sm:w-2/3">{summary}</p>
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

FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  children: PropTypes.node,
};
