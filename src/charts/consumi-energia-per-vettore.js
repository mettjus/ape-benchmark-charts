import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { EChart } from './utils'
import { format as d3format } from 'd3-format'

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

const getOptions = ({ color, mu }) => ({
  xAxis: {
    type: 'category',
    data: data.map(({ anno, consumo }) => anno),
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: (value, index) => d3format('~s')(value),
    },
  },
  series: [
    {
      data: data.map(({ anno, consumo }) => consumo),
      type: 'bar',
      color,
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
  legend: {
    orient: 'vertical',
    left: 'left',
    data: data.map(({ anno }) => anno),
  },
  tooltip: {
    trigger: 'item',
    formatter: ({ name, value }) =>
      renderToStaticMarkup(
        <table style={{ textAlign: 'left' }}>
          <tbody>
            <tr>
              <th>Anno</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Spesa</th>
              <td>
                {value} {mu}
              </td>
            </tr>
          </tbody>
        </table>,
      ),
  },
})

const Chart = ({ title, color, mu, style } = {}) => {
  return (
    <EChart
      option={{
        title: { text: title, x: 'center' },
        ...getOptions({ color, mu }),
      }}
      style={style}
    />
  )
}

export const ConsumiEnergiaPerVettore = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>
        Consumi annuali di energia divisi per vettore energetico
        {/* [kWh <sub>el</sub>, mc, l, kg, ecc.] */}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Chart
          title="Boh"
          mu={
            <span>
              kWh<sub>el</sub>
            </span>
          }
          style={{ flexBasis: '50%' }}
        />
        <Chart
          title="Gas"
          mu="mc"
          style={{ flexBasis: '50%' }}
          color="#cdd422"
        />
        <Chart
          title="Gasolio"
          mu="l"
          style={{ flexBasis: '50%' }}
          color="#431c5d"
        />
        <Chart
          title="Cippato"
          mu="kg"
          style={{ flexBasis: '50%' }}
          color="#e05915"
        />
      </div>
    </div>
  )
}
