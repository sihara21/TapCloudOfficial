import React, { useState } from 'react'

export default function App() {
  const [taps, setTaps] = useState(0)

  return (
    <div className="app">
      <h1>TapCloud</h1>
      <button onClick={() => setTaps(taps + 1)}>TAP TO FARM TCL</button>
      <p>TCL Earned: {taps}</p>
    </div>
  )
}
