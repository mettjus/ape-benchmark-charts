import React from 'react'
import { EChart } from './utils'
import { format as d3format } from 'd3-format'

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

window.d3format = d3format

const getOptions = ({ color }) => ({
  xAxis: {
    type: 'category',
    data: data.map(({ anno, spesa }) => anno),
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      //formatter: (value, index) => d3format('s')(value),
      formatter: (value, index) => d3format('~s')(value),
      //formatter: (value, index) => value,
    },
  },
  series: [
    {
      data: data.map(({ anno, spesa }) => spesa),
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
    //formatter: 'Anno: {b}<br />Spesa {c} €',
    formatter: `<table><tbody>
      <tr><th>Anno</th><td>{b}</td></tr>
      <tr><th>Spesa</th><td>{c} €</td></tr>
    </tbody></table>`,
  },
})

const Chart = ({ title, color, style } = {}) => {
  return (
    <EChart
      option={{ title: { text: title, x: 'center' }, ...getOptions({ color }) }}
      style={style}
    />
  )
}

export const SpesePerVettore = () => {
  return (
    <div>
      <h3>Spese energetiche annuali divise per vettore energetico [€]</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Chart title="Boh" style={{ flexBasis: '50%' }} />
        <Chart title="Gas" style={{ flexBasis: '50%' }} color="#cdd422" />
        <Chart title="Gasolio" style={{ flexBasis: '50%' }} color="#431c5d" />
        <Chart title="Cippato" style={{ flexBasis: '50%' }} color="#e05915" />
      </div>
    </div>
  )
}
