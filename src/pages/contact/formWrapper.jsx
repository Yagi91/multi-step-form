import PropTypes from "prop-types";

export function FormWrapper({ title, summary, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{summary}</p>
      <div className="mt-10 grid gap-y-2 gap-x-4 justify-start grid-cols-1 sm:grid-cols-2">
        {children}
      </div>
    </>
  );
}

FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
