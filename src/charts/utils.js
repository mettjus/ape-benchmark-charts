import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'
import { withSize } from 'react-sizeme'

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

// export const EChart = withSize()(({ size, option, style }) => {
//   const ref = useRef()
//   const echartRef = useRef()
//   useEffect(() => {
//     echartRef.current = echarts.init(ref.current).setOption(option)
//   }, [option])
//   useEffect(() => {
//     echartRef.current.resize()
//   }, [size])
//   return (
//     <div
//       ref={ref}
//       style={{ width: size.width, height: size.height, ...style }}
//     />
//   )
// })
