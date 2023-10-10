
import PropTypes from "prop-types";

export const Form = ({ children, handleSubmit }) => {
    console.log(children);
    
    return (
        <form
        onSubmit={
            (event) => {
                event.preventDefault();
                handleSubmit();
            }
        }
        className="flex flex-col"
        >
        {children}
        </form>
    );};


Form.propTypes = {
    children: PropTypes.node,
    handleSubmit: PropTypes.func.isRequired
};
