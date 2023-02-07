import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore, AppState } from './store'

export default function Form() {
  const urlEl = useRef<HTMLInputElement>(null)

  const fetchData = () => {
    fetch('https://random-data-api.com/api/v2/users').then(res => {
      res.json().then(data => {
        console.log(data)
      })  
    })
  }


  return (
    <div>
      <input ref={urlEl}></input>
      <button onClick={fetchData}>FETCH</button>
    </div>
  )
}