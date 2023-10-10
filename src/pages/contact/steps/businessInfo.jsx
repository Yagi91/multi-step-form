import PropTypes from 'prop-types';

const BusinessInfo = () => {
    return (
        <div className="form">
            <h1>Business Information</h1>
        </div>
    );
};

BusinessInfo.propTypes = {
    formData: PropTypes.object.isRequired
};

export default BusinessInfo;