import React, { useState } from 'react'
import './App.css'

const COLORS = ['pink', 'blue', 'green', 'yellow', 'red', 'black']

function App() {
  const [colorBoxOne, setColorBoxOne] = useState('')
  const [colorBoxTwo, setColorBoxTwo] = useState('')
  const [colorBoxThree, setColorBoxThree] = useState('')

  const randomIndex = () => Math.floor(Math.random() * (5 + 1))

  const handleRoll = () => {
    setColorBoxOne(COLORS[randomIndex()])
    setColorBoxTwo(COLORS[randomIndex()])
    setColorBoxThree(COLORS[randomIndex()])
  }

  const outputColor = () => {
    const colors = [colorBoxOne, colorBoxTwo, colorBoxThree]
    let tempColors = []
    for (const color of colors) {
      tempColors = tempColors.concat({
        num: colors.filter((c) => c === color).length,
        color
      })
    }

    const sortedColors = tempColors.sort((a, b) => b.num - a.num)
    const first = sortedColors[0]
    if (first.num > 1) {
      return [`${first.color} x ${first.num}`, first.color]
    } else {
      return ['', 'draw']
    }
  }

  return (
    <div className='App'>
      <button onClick={handleRoll}>ROLL</button>
      <div className='box-list'>
        <div style={{ backgroundColor: colorBoxOne }} className='box'></div>
        <div style={{ backgroundColor: colorBoxTwo }} className='box'></div>
        <div style={{ backgroundColor: colorBoxThree }} className='box'></div>
      </div>
      <h1 style={{ color: outputColor()[1] }} className='output'>
        {outputColor()[0]}
      </h1>
    </div>
  )
}

export default App
