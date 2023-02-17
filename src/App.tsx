import './App.css'
import { useBearStore, AppState } from './store'
import { CellComponent } from './Card'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'

export type CellState = "start" | "finish" | "unchecked" | "checked" | "being_checked" | "part_of_path"

export class Cell {
  constructor(
    public el: HTMLElement | null, 
    public index: number,
    public state: CellState = "unchecked"
  ){}
}


const cells: Cell[] = []

export default function App() {
  
  const cellRows = 60    // num of rows
  const cellCols = 20   // num of columns
  const cellSize = 30 // cell size in px -> calculated based on container size 
  
  const [ cellz, setCellz ] = useState<Cell[]>([]) 
  
  useEffect(() => {
    // set grid cell css
    const cellElements = document!.querySelectorAll<HTMLElement>('.grid-cell')!
    cellElements.forEach((cellEl, i) => {
      cellEl.style.width = `${100 / cellRows}%`
      cells.push(new Cell(cellEl, i))
      setCellz(cells)
    });
  }, [])
  
  function changeState(cell: Cell, state: CellState) {
    cell.state = state
    cellz[cell.index].state = 'finish'
    setCellz([...cellz])
  }

  
  return (
    <div className="App">
      <div className='grid-container'>
        {
          [...Array(cellRows * cellCols)].map((el, i) => {
            return(
              <div className='grid-cell' id={i.toString()}></div>
            )
          })
        }
      </div>
      <button onClick={() => {changeState(cells[2], "finish")}}>asd</button>
      { 
        cellz.map((c) => { return(c.state + ' ')}) 
      }
    </div>
  )
}