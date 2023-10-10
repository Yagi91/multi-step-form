import PropTypes from "prop-types";

export const Form = ({ children, handleSubmit }) => {
  console.log(children);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      className="container rounded-md max-w-[1200px] px-7 py-12 flex flex-col gap-2 justify-center items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
};
