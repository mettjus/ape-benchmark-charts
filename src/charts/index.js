import React from 'react'

import 'react-vis/dist/style.css'

import { ConsumoEnergiaPrimariaChart } from './consumo-energia-primaria'
import { SpeseEnergeticheChart } from './spese-energetiche'

export default () => (
  <div>
    <ConsumoEnergiaPrimariaChart />
    <SpeseEnergeticheChart />
  </div>
)
