import React from 'react'

export default function StepMessege({step, children}) {
  return (
    <div>
          <p className="message">
            Step {step} :{" "}
          {children}
          </p>
          </div>
  )
}
