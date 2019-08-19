import React from 'react'

export const CrosshairPanel = ({ children }) => (
  <div
    className="rv-crosshair__inner__content"
    style={{
      backgroundColor: 'rgba(0,0,0,.8)',
      margin: 8,
    }}
  >
    {children}
  </div>
)
