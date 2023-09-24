import React from 'react'

export default function Button({textColor, bgColor, onClick, children}) {
  return (
     <div >
            <button
              style={{ backgroundColor: bgColor, color: textColor }}
              onClick={onClick}
            >
             {children}
            </button>
          </div>
  )
}
