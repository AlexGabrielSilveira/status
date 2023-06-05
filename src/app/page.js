"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() { 
  const[data, setData] = useState([])
  const[load, setLoad] = useState(true)

  function getData() {
    fetch('https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=L83WLRODFJGES7T9')
    .then(res => res.json())
    .then(res => {
      setData(res.markets.slice(0,14))
      setLoad(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1 className={styles.index_title}>Índices Mundiais</h1>
      {load == true ? (<h1 className={styles.loading}> Carregando... </h1>) : (
        <div className={styles.market_index}>
            {data?.map((d) => (
              <p key={d.primary_exchanges}>
                <span className={styles.region}><strong>{d.region}</strong></span>
                <span className={styles.open}><strong>Abre:</strong> {d.local_open}</span><br />
                <span className={styles.close}><strong>Fecha:</strong> {d.local_close}</span>
                <span className={styles.current_status}><strong>status:</strong> {d.current_status}</span>
              </p>
            ))}
        </div>
      )}
    </>
  )
}
