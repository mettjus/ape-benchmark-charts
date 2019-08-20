import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'

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

export const EChart = ({ option, style }) => {
  const ref = useRef()
  useEffect(() => {
    echarts.init(ref.current).setOption(option)
  }, [option])
  return <div ref={ref} style={{ width: 300, height: 300, ...style }} />
}
