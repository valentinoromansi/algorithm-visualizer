import './App.css'
import { useBearStore, AppState } from './store'
import { Card } from './Card'

export default function App() {
  
  return (
    <div className="App">
      <Card name='aaa'/>
      <Card name='bbb'/>
      <Card name='ccc'/>
    </div>
  )
}