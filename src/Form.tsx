import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useBearStore, AppState } from './store'

interface Data {
  first_name: string
}


export default function Form() {
  const urlEl = useRef<HTMLInputElement>(null)
  const [users, usersData] = useState<Data[]>([])
  const [fetching, setFetching] = useState<boolean>(false)

  useEffect(() => {
    urlEl!.current!.style.background = 'red'
  }, []);
  
  
  const fetchData = async() => {
    setFetching(true)
    const response = await fetch('https://random-data-api.com/api/v2/users')
    const data: Data = await response.json()
    usersData([...users, data])
  }

  useEffect(() => {
    setFetching(false)
  }, [users])


  return (
    <div id='form-root'>
      <input ref={urlEl}></input>
      <button disabled={fetching} onClick={() => fetchData()}>FETCH</button>
      {
        users.map((user, i) => {
          console.log(users.map(u => u.first_name))
            return <p key={i}>{`${i} ${user.first_name}`}</p>
        })
      }
    </div>
  )
}