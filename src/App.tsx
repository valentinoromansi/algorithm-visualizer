import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Child from './Child'
import { useBearStore, AppState } from './store'
import Form from './Form'

export default function App() {
  let [name, setName] = useState("Marik")
  const increaseBears = useBearStore((state: AppState) => state.increaseBears)
  
  return (
    <div className="App">
      <Form></Form>
      <Child name={name}/>
      <button onClick={increaseBears}>Add</button>
    </div>
  )
}