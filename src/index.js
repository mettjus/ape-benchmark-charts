import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'
import './styles.css'
import Charts from './charts'
import Tests from './tests'

function App() {
  return (
    <div>
      {/* <Charts /> */}
      <Tests />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
