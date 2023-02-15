import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore, AppState } from './store'
import './Card.css'

export interface CellType {
  index: number,
  state: "start" | "finish" | "unchecked" | "checked" | "being_checked" | "part_of_path"
}


export function CellComponent(props: CellType) {
  const { index, state } = props
  const refDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
      console.log(refDiv.current)
      setInterval(() => refDiv.current?.classList.add('shown'), 0)
  }, [])

  return (
    <div ref={refDiv} className='card hidden'>
      <p>{name}</p>
    </div>
  )
}