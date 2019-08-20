import React, { useRef, useEffect } from 'react'
import echarts from 'echarts'

const data = [
  { name: 'Consumo di calore\ndegli edifici', value: 70, color: '#89DAC1' },
  { name: 'Consumo elettrico\ndegli edifici', value: 120, color: '#F6D18A' },
  { name: 'Illuminazione pubblica', value: 130, color: '#1E96BE' },
  { name: 'Consumo di carburante', value: 80, color: '#DA70BF' },
  {
    name: 'Produzione di\nenergia rinnovabile\ntermica',
    value: 24,
    color: '#F6D18A',
  },
  {
    name: 'Produzione di\nenergia rinnovabile\nelettrica',
    value: 35,
    color: 'red',
  },
]

const option = {
  title: {
    text:
      'Ripartizione dei consumi annuali\ndi energia primaria sui vari settori',
    subtext: '[kWh]',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} kWh ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: data.map(({ name }) => name),
  },
  series: [
    {
      name: 'Consumi/produzione',
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

export const ConsumiEnergiaPrimariaPerSettoreChart = () => {
  const ref = useRef()
  useEffect(() => {
    echarts.init(ref.current).setOption(option)
  }, [])
  return <div ref={ref} style={{ width: 700, height: 700 }} />
}
