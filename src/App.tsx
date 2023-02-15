import './App.css'
import { useBearStore, AppState } from './store'
import { CellComponent } from './Card'
import { useEffect } from 'react'

export default function App() {

  const cellRows = 60    // num of rows
  const cellCols = 20   // num of columns
  const cellSize = 30 // cell size in px -> calculated based on container size
  //<CellComponent index={0} state='unchecked'/>

  useEffect(() => {
    // set grid cell css
    const cells = document!.querySelectorAll<HTMLElement>('.grid-cell')!
    cells.forEach(cell => {
      cell.style.width = `${100 / cellRows}%`
    });
  }, [])

  function createCell(index: number) {
    return (
      <div className='grid-cell' id={index.toString()}></div>
    )
  }

  
  return (
    <div className="App">
      <div className='grid-container'>
        {
          [...Array(cellRows * cellCols)].map((el, i) => {
            return(
              createCell(i)
            )
          })
        }
      </div>
    </div>
  )
}