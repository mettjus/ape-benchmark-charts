import React, { useState } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  makeWidthFlexible,
  Crosshair,
} from 'react-vis'
import { CrosshairPanel } from './utils'

const BarSeries = VerticalBarSeries
const FlexibleXPlot = makeWidthFlexible(XYPlot)

const data = [
  {
    anno: 2014,
    consumo: 300,
  },
  {
    anno: 2015,
    consumo: 290,
  },
  {
    anno: 2016,
    consumo: 295,
  },
  {
    anno: 2017,
    consumo: 287,
  },
  {
    anno: 2018,
    consumo: 282,
  },
  {
    anno: 2019,
    consumo: 195,
  },
]

const useCrosshair = (initialValue = null) => {
  const [value, setCrosshairValue] = useState(initialValue)
  const renderCrosshair = () =>
    value && (
      <Crosshair values={[value]}>
        <CrosshairPanel>
          <table style={{ width: 120 }}>
            <tbody>
              <tr>
                <th>Anno</th>
                <td>{value.anno}</td>
              </tr>
              <tr>
                <th>Consumi</th>
                <td>{value.consumo} kWh</td>
              </tr>
            </tbody>
          </table>
        </CrosshairPanel>
      </Crosshair>
    )
  return { setCrosshairValue, renderCrosshair }
}

export const ConsumoEnergiaPrimariaChart = () => {
  const { setCrosshairValue, renderCrosshair } = useCrosshair()
  const yDomain = [0, Math.max(...data.map(d => d.consumo)) * 1.1]
  return (
    <div>
      <h3>Consumi annuali di energia primaria [kWh]</h3>
      <FlexibleXPlot
        height={200}
        yDomain={yDomain}
        xType="ordinal"
        onMouseLeave={() => setCrosshairValue(null)}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries
          onNearestX={({ x }, { index }) =>
            setCrosshairValue({ x, ...data[index] })
          }
          color="tomato"
          data={data.map(({ anno, consumo }) => ({ x: anno, y: consumo }))}
        />
        {renderCrosshair()}
      </FlexibleXPlot>
    </div>
  )
}
