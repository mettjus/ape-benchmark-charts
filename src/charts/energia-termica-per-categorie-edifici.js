import React, { useRef, useEffect } from 'react'
import { formatLocale } from 'd3-format'
import { EChart } from './utils'

const d3formatter = formatLocale({
  decimal: ',',
  thousands: '.',
})

const data = [
  { name: 'Scuole ed asili', value: 23, color: '#89DAC1' },
  { name: 'Ospedali e case di riposo', value: 35, color: '#F6D18A' },
  { name: 'Edifici sportivi ', value: 11, color: '#1E96BE' },
  { name: 'Municipio e uffici amministrativi', value: 132, color: '#DA70BF' },
  { name: 'Edifici polifunzionali', value: 23, color: '#F6D18A' },
  { name: 'Teatri e cinema', value: 26, color: 'red' },
  { name: 'Altro', value: 150, color: 'green' },
].map(d => ({ ...d, value: d.value * 10000 }))

const option = {
  title: {
    text: `Ripartizione dell'energia termica\nsulle varie categorie di edifici`,
    //subtext: '€',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: ({ name, value, percent }) =>
      `${name}: ${d3formatter.format('~s')(value)} kWh (${percent}%)`,
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: data.map(({ name }) => name),
  },
  series: [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: data.map(({ name, value }) => ({ name, value: value })),
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

export const EnergiaTermicaPerCategorieEdificiChart = () => (
  <EChart option={option} style={{ width: 700, height: 700 }} />
)
