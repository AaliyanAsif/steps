import React, { useState } from "react";
import Button from "./components/Button";
import StepMessege from "./components/StepMessege";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((o) => !o)}>
        {isOpen ? "x" : "Open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <StepMessege step={step}>
            {messages[step - 1]}
          </StepMessege>
<div className="buttons">

          <Button bgColor={"#7950f2"} textColor={"#fff"}  onClick={handlePrevious}  >
            <span>👈 Previous</span>
          </Button>
          <Button bgColor={"#7950f2"} textColor={"#fff"}  onClick={handleNext}  > 
          <span>Next 👉</span>
          </Button>
</div>
        </div>
      )}
    </>
  );
}
