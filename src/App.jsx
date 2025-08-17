import { useState } from 'react'
import './App.css'

const App = () => {
  const [rgb, setRgb] = useState({ r: 255, g: 103, b: 87 })
  const [hex, setHex] = useState('#ff6757')

  const handleRgbChange = (e) => {
    const { name, value } = e.target
    setRgb({ ...rgb, [name]: Number(value) })
  }

  const handleHexChange = (e) => {
    setHex(e.target.value)
  }

  return (
    <div className='app'>
      <div className="converter">
        <h1>Colour Converter</h1>
        <div className="rgb-section">
          <h2>RGB</h2>
          <div className="input-groups">
            <div className="input-group">
              <label>R:</label>
              <input type="number" name='r' min='0' max='255' value={255} />
            </div>
            <div className="input-group">
              <label>G:</label>
              <input type="number" name='g' min='0' max='255' value={103} />
            </div>
            <div className="input-group">
              <label>B:</label>
              <input type="number" name='b' min='0' max='255' value={87} />
            </div>
          </div>
        </div>
        <div className="hex-section">
          <h2>HEX</h2>
          <input type="text" maxLength="7" value="#ff6757" />
        </div>
      </div>
      <div className="color-preview" style={{ backgroundColor: hex }}></div>
    </div>
  )
}

export default App