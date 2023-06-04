"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Infos from '@/components/infos/Infos'

export default function Home() { 
  const[load, setLoad] = useState(true)
  const[stocksNames, setStocksNames] = useState([])

  
  function getStocksNames() {
    fetch('https://brapi.dev/api/available')
      .then(res => res.json())
      .then(res => {
        setStocksNames(res.stocks.slice(0,50))
        setLoad(false)
      })
  }
  

  useEffect(() => {
    getStocksNames()
  }, [])
  
  return (
    <>
      {load == false ? (
        <div className={styles.infos}>
          <h2>Sto<span>cks</span></h2>
          <div>
            <Infos key={stocksNames.symbol} stocks={stocksNames} type="stocks"/>
          </div>
        </div>
      ) : <h1>carregando</h1>}
    </>
  )
}
