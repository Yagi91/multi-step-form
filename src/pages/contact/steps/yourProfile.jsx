import PropTypes from "prop-types";

import { useState } from "react";
import { FormWrapper } from "../formWrapper";

const YourProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

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
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-2 text-left" htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          className={`border py-2 px-3 text-grey-darkest rounded-md`}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onBlur={validatePassword}
          required
          onChange={handlePasswordChange}
          value={password}
        />
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
          onBlur={validatePassword}
          required
        />
        {passwordError && <span className="text-red-500">{passwordError}</span>}
      </div>
    </FormWrapper>
  );
};

YourProfile.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default YourProfile;
