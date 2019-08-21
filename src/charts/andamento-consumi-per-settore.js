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

const charts = [
  {
    title: 'Energia termica per edifici',
    color: 'red',
    mu: 'kWh',
  },
  {
    title: 'Energia elettrica per edifici',
    color: '#cdd422',
    mu: (
      <span>
        kWh<sub>el</sub>
      </span>
    ),
  },
  {
    title: 'Illuminazione pubblica',
    color: '#431c5d',
    mu: (
      <span>
        kWh<sub>el</sub>
      </span>
    ),
  },
  { title: 'Veicoli', color: '#e05915', mu: 'kWh' },
]

export const AndamentoConsumiPerSettore = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>
        Consumi annuali di energia per settore
        {/* [kWh <sub>el</sub>, mc, l, kg, ecc.] */}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {charts.map(({ title, mu, color }, index) => (
          <Chart
            key={index}
            title={title}
            mu={mu}
            color={color}
            style={{ flexBasis: '50%' }}
          />
        ))}
      </div>
    </div>
  )
}
