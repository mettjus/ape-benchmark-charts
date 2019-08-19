import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'
import './styles.css'
import { ConsumoEnergiaPrimariaChart } from './charts/consumo-energia-primaria'
import { SpeseEnergeticheChart } from './charts/spese-energetiche'

function App() {
  return (
    <div>
      <ConsumoEnergiaPrimariaChart />
      <SpeseEnergeticheChart />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
