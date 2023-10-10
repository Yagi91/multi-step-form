import PropTypes from 'prop-types';

const SubmitForm = () => {
    return (
        <div className="form">
            <h1>Thanks For completing the form</h1>
        </div>
    );
};

SubmitForm.propTypes = {
    formData: PropTypes.object.isRequired
};

export default SubmitForm;