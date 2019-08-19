import React, { useState } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  makeWidthFlexible,
  Crosshair,
} from 'react-vis'
import { CrosshairPanel } from './utils'

const BarSeries = VerticalBarSeries
const FlexibleXPlot = makeWidthFlexible(XYPlot)

const data = [
  {
    anno: 2014,
    spesa: 300000,
  },
  {
    anno: 2015,
    spesa: 290000,
  },
  {
    anno: 2016,
    spesa: 295000,
  },
  {
    anno: 2017,
    spesa: 287000,
  },
  {
    anno: 2018,
    spesa: 282000,
  },
  {
    anno: 2019,
    spesa: 195000,
  },
]

const useCrosshair = (initialValue = null) => {
  const [crosshairValue, setCrosshairValue] = useState(initialValue)
  const renderCrosshair = () =>
    crosshairValue && (
      <Crosshair values={[crosshairValue]}>
        <CrosshairPanel>
          <table style={{ width: 120 }}>
            <tbody>
              <tr>
                <th>Anno</th>
                <td>{crosshairValue.anno}</td>
              </tr>
              <tr>
                <th>Spesa</th>
                <td>{crosshairValue.spesa} €</td>
              </tr>
            </tbody>
          </table>
        </CrosshairPanel>
      </Crosshair>
    )
  return {
    setCrosshairValue,
    renderCrosshair,
  }
}

export const SpeseEnergeticheChart = () => {
  const { setCrosshairValue, renderCrosshair } = useCrosshair()
  const yDomain = [0, Math.max(...data.map(d => d.spesa)) * 1.1]
  return (
    <div>
      <h3>Spese energetiche annuali [€]</h3>
      <FlexibleXPlot
        height={200}
        yDomain={yDomain}
        xType="ordinal"
        onMouseLeave={() => setCrosshairValue(null)}
        margin={{ left: 60 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis
          tickFormat={(v, i, scale, tickTotal) =>
            scale.tickFormat(tickTotal, 's')(v)
          }
        />
        <BarSeries
          onNearestX={({ x }, { index }) =>
            setCrosshairValue({ x, ...data[index] })
          }
          color="tomato"
          data={data.map(({ anno, spesa }) => ({ x: anno, y: spesa }))}
        />
        {renderCrosshair()}
      </FlexibleXPlot>
    </div>
  )
}
