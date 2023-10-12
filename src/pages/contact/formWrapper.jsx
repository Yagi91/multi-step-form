import PropTypes from "prop-types";

export function FormWrapper({ title, summary, children, currentStep }) {
  return (
    <>
      <p className="text-xl text-gray-400">Step {currentStep}</p>
      <h1 className="font-bold">{title}</h1>
      <p className="whitespace-pre-wrap sm:w-2/3">{summary}</p>
      <div className="mt-10 grid gap-y-2 gap-x-4 justify-start grid-cols-1 sm:grid-cols-2">
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
