// import "./stepper.css";

import PropTypes from "prop-types";

const Stepper = ({ currentStep }) => {
  const steps = ["Your Profile", "Business Info", "Complete"];

  return (
    <div className="flex justify-between relative width-full height-[40px]">
      <div
        className={`progress rounded-tl-md absolute h-full transition-all bg-gradient-to-r from-[#242424] bg-gradient-to-r from-white to-red-500 to-red-500`}
        style={{
          width: `calc(100% / ${3 / currentStep} - ${
            currentStep === 3 ? "20px" : "0px"
          })`,
        }}
      ></div>
      {steps?.map((step, index) => (
        <div
          key={index}
          className="w-full flex flex-col py-1 justify-center items-center text-center relative"
        >
          <div className="border w-[26px] rounded-full">{index + 1}</div>
          <p className="">{step}</p>
        </div>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
