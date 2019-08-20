import React from 'react'

import 'react-vis/dist/style.css'

import { ConsumoEnergiaPrimariaChart } from './consumo-energia-primaria'
import { SpeseEnergeticheChart } from './spese-energetiche'
import { ConsumiEnergiaPerVettore } from './consumi-energia-per-vettore'
import { SpesePerVettore } from './spese-per-vettore'
import { ConsumiEnergiaPrimariaPerSettoreChart } from './consumi-energia-primaria-per-settore'
import { SpesePerSettoreChart } from './spesa-per-settore'
import { EnergiaElettricaPerCategorieEdificiChart } from './energia-elettrica-per-categorie-edifici'
import { EnergiaTermicaPerCategorieEdificiChart } from './energia-termica-per-categorie-edifici'

export default () => (
  <div>
    <ConsumoEnergiaPrimariaChart />
    <SpeseEnergeticheChart />
    <ConsumiEnergiaPerVettore />
    <SpesePerVettore />
    <div style={{ display: 'flex' }}>
      <ConsumiEnergiaPrimariaPerSettoreChart />
      <SpesePerSettoreChart />
    </div>
    <div style={{ display: 'flex' }}>
      <EnergiaElettricaPerCategorieEdificiChart />
      <EnergiaTermicaPerCategorieEdificiChart />
    </div>
  </div>
)
