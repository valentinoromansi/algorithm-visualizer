import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore, AppState } from './store'
import './Card.css'

export interface CardType {
  name: string
}


export function Card(props: CardType) {
  const { name } = props
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