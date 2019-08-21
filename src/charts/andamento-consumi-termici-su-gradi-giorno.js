import React from 'react'
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

const getOptions = ({ color }) => ({
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
    formatter: ({ name, value }) => `<table><tbody>
    <tr><th>Anno</th><td>${name}</td></tr>
    <tr><th>Spesa</th><td>${value} kWh</td></tr>
  </tbody></table>`,
  },
})

export const AndamentoConsumiTermiciSuGradiGiorno = () => {
  return (
    <EChart
      option={{
        title: {
          text: 'Consumi di energia termica pesati sui gradi giorno',
          subtext: 'kWh',
          x: 'center',
        },
        ...getOptions({ color: 'tomato' }),
      }}
      style={{ width: '100%' }}
    />
  )
}
