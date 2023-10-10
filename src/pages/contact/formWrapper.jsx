import PropTypes from "prop-types";

export function FormWrapper({ title, summary, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{summary}</p>
      <div>{children}</div>
    </>
  );
}

FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
