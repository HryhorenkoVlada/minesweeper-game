import React from 'react'
import { Header, Scoreboard } from './components'

import './App.css'

const App = () => {
  return (
    <>
      <Header
        name="Mineswipper"
        feature="flag"
        firstAction="ctrl"
        secondAction="click"
      />
      <Scoreboard
        time="000"
        levels={['begginer', 'intermedium', 'expert']}
        mines="010"
        onReset={() => null}
      />
    </>
  )
}

export default App
