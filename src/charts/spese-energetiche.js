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

const getOptions = ({ color }) => ({
  xAxis: {
    type: 'category',
    data: data.map(({ anno, spesa }) => anno),
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: (value, index) => d3format('~s')(value),
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
    formatter: ({ name, value }) => `<table><tbody>
    <tr><th>Anno</th><td>${name}</td></tr>
    <tr><th>Spesa</th><td>${value} €</td></tr>
  </tbody></table>`,
  },
})

export const SpeseEnergeticheChart = () => {
  return (
    <EChart
      option={{
        title: {
          text: 'Spese energetiche annuali',
          subtext: '€',
          x: 'center',
        },
        ...getOptions({ color: '#3fb0ac' }),
      }}
      style={{ width: '100%' }}
    />
  )
}
