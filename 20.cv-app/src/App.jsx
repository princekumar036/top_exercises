import { useState } from 'react'
import emptyCV from './assets/emptyCV'
import exampleCV from './assets/exampleCV'

function App() {
  
  const [CVData, setCVData] = useState(exampleCV)

  console.log(CVData)

  // function handleChange(event) {
  //   const {name, value, type, checked} = event.target

  //   // const prevDat
  //   a = this.state.prevData

  //   setCVData(prevData => ({
  //     ...prevData,
  //     [name]: type === 'checkbox' ? checked : value
  //   }))
  // }

  function handleChange(e) {
    
  }

  return (
    <>

      <h1>CV Builder</h1>
      
      <button>Load Example</button>
      <button>Clear Example</button>

      <form>
        Basics
        <input type="text" placeholder="Name" name='name' value={CVData.basics.name}  onChange={(e) => handleChange(e.target.value)} />
      </form>

    </>
  )
}

export default App
