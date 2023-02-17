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

let selectedCellState: CellState = 'start'
let leftMouseDown = false

export default function App() {
  
  const cellRows = 60    // num of rows
  const cellCols = 20   // num of columns
  const cellSize = 30 // cell size in px -> calculated based on container size
  
  
  useEffect(() => {
    // set grid cell css
    const cellElements = document!.querySelectorAll<HTMLElement>('.grid-cell')!
    cellElements.forEach((cellEl, i) => {
      cellEl.style.width = `${100 / cellRows}%`
      cells.push(new Cell(cellEl, i))
      cellEl.onmousemove = () => {
        if(leftMouseDown)
          setCellState(cells[i], selectedCellState)
      }
    });
    document.body.onmousedown = () => { leftMouseDown = true }
    document.body.onmouseup = () => { leftMouseDown = false }
  }, [])
  
  function setCellState(cell: Cell, state: CellState) {
    if(cell.state === state)
      return    
    cell.state = state
    cell.el?.classList.remove("start", "finish", "unchecked", "checked", "being_checked", "part_of_path")
    cell.el?.classList.add(state)
  }

  
  return (
    <div className="App">
      <div>
        <button onClick={() => { selectedCellState = 'start' }}>start</button>
        <button onClick={() => { selectedCellState = 'finish' }}>finish</button>
      </div>
      <div className='grid-container'>
        {
          [...Array(cellRows * cellCols)].map((el, i) => {
            return(
              <div className='grid-cell' key={i}></div>
            )
          })
        }
      </div>
    </div>
  )
}