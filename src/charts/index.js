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
import { AndamentoConsumiPerSettore } from './andamento-consumi-per-settore'
import { AndamentoConsumiTermiciSuGradiGiorno } from './andamento-consumi-termici-su-gradi-giorno'
import { AndamentoSpesePerSettore } from './andamento-spese-per-settore'
import { AndamentoIndicatoriConsumoPerSettore } from './andamento-indicatore-consumo-per-settore'

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
    <AndamentoConsumiPerSettore />
    <AndamentoConsumiTermiciSuGradiGiorno />
    <AndamentoSpesePerSettore />
    <AndamentoIndicatoriConsumoPerSettore />
  </div>
)
