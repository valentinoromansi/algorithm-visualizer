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
  
  const rows = 20    // num of rows
  const columns = 40   // num of columns 
  
  useEffect(() => {
    document.body.onmousedown = () => { leftMouseDown = true }
    document.body.onmouseup = () => { leftMouseDown = false }
    // set grid cell css
    const cellElements = document!.querySelectorAll<HTMLElement>('.grid-cell')!
    cellElements.forEach((cellEl, i) => {
      cellEl.style.width = `${100 / columns}%`
      cells.push(new Cell(cellEl, i))
      cellEl.onmousemove = () => {
        if(leftMouseDown)
          setCellState(cells[i], selectedCellState)
      }
    });
    // Set start and finish cells - position them middle left for start and middle right for row
    const indexPositions = { 
      start: Math.round(rows / 2 * columns - (columns * 0.8)),
      finish: Math.round(rows / 2 * columns - (columns * 0.2)),
    }
    setCellState(cells[indexPositions.start], 'start')
    setCellState(cells[indexPositions.finish], 'finish')

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
        <button onClick={() => { selectedCellState = 'unchecked' }}>unchecked</button>
        <button onClick={() => { selectedCellState = 'checked' }}>checked</button>
        <button onClick={() => { selectedCellState = 'being_checked' }}>being_checked</button>
        <button onClick={() => { selectedCellState = 'part_of_path' }}>part_of_path</button>
      </div>
      <div className='grid-container'>
        {
          [...Array(rows * columns)].map((el, i) => {
            return(
              <div className='grid-cell' key={i}>
                <i className="gg-flag-alt"></i>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}