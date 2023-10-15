import { useState } from "react";
import { FormWrapper } from "../formWrapper";

// This component is used to render the Your Profile form step
import PropTypes from "prop-types";

const YourProfile = ({ handleChange, formData, currentStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    handleChange(event);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Check if passwords match and are at least 8 characters long
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <FormWrapper
      title="Your Profile"
      summary="Enter the login information for your account. You will be able to create additional users after registering."
      currentStep={currentStep}
    >
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="firstName">
          First Name <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="First Name"
          id="middleName"
          name="firstName"
          required
          onChange={handleChange}
          value={formData.firstName}
          autoFocus
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="lastName">
          Last Name <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          required
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="tel"
          placeholder="Phone"
          id="phone"
          name="phone"
          required
          onChange={handleChange}
          value={formData.phone}
          onInvalid={(e) => e.target.setCustomValidity("Numbers Only")}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          className={`border py-2 px-3 text-grey-darkest rounded-md focus:outline-blue-500`}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
          onChange={handlePasswordChange}
          value={password}
          pattern=".{8,}" // Minimum 8 characters
          onInvalid={(e) => e.target.setCustomValidity(passwordError)}
        />
        <span className="text-sm text-left font-sm">
          Password must be at least 8 characters long
        </span>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="confirmPassword">
          Confirm Password <span>*</span>
        </label>
        <input
          className="border py-2 px-3 text-grey-darkest rounded-md"
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          pattern={password}
          onInvalid={(e) => e.target.setCustomValidity(passwordError)} // Set custom validation message
          onBlur={validatePassword} // Validate on blur
        />
        {passwordError === "Passwords do not match" && (
          <span className="text-sm text-right font-sm text-red-500">
            {passwordError}
          </span>
        )}
      </div>
    </FormWrapper>
  );
};

YourProfile.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default YourProfile;
