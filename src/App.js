import React from 'react'
import LineChart from './Components/LineCharts/LineChart'
import BarChart from './Components/BarChart/BarChart'

function App() {
  return (
    <div style={{backgroundImage:'linear-gradient(180deg,#dfedf0,#e6dada)'}} >
      <div style={{padding:'20px'}}>
      <LineChart />
      <BarChart />
    </div>
    </div>
  )}

export default App
