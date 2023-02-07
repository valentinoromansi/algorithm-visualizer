import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore, AppState } from './store'

export default function Child(props: {name: string}) {
  const { name } = props
  const bears = useBearStore((state: AppState) => state.bears)

  return (
    <div>
      {name}
      {bears}
    </div>
  )
}