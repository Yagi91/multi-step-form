import PropTypes from "prop-types";
import { FormWrapper } from "../formWrapper";

const BusinessInfo = ({ handleChange, formData, currentStep }) => {
  return (
    <FormWrapper
      title="Business Information"
      summary="Please enter your Business Information"
      currentStep={currentStep}
    >
      <h2>General Information</h2>
      <div></div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="businessName">
          Business Name <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Business Name"
          id="businessName"
          name="businessName"
          required
          onChange={handleChange}
          value={formData.businessName}
          autoFocus
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="brandType">
          Brand Type <span>*</span>
        </label>
        <select
          className="border py-2 px-3 text-grey-darkest rounded-md"
          id="brandType"
          name="brandType"
          required
          onChange={handleChange}
          value={formData.brandType}
        >
          <option value="0">Select Brand Type</option>
          <option value="1">Brand Type 1</option>
          <option value="2">Brand Type 2</option>
          <option value="3">Brand Type 3</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="businessAddress">
          Business Address <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Business Address"
          id="businessAddress"
          name="businessAddress"
          required
          onChange={handleChange}
          value={formData.businessAddress}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="businessCity">
          Business City <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Business City"
          id="businessCity"
          name="businessCity"
          required
          onChange={handleChange}
          value={formData.businessCity}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="businessZip">
          Business Zip Code <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Business Zip Code"
          id="businessZip"
          name="businessZip"
          required
          onChange={handleChange}
          value={formData.businessZip}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="taxId">
          Tax ID Number <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Tax ID Number"
          id="taxId"
          name="taxId"
          required
          onChange={handleChange}
          value={formData.taxId}
        />
      </div>
    </FormWrapper>
  );
};

BusinessInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default BusinessInfo;
