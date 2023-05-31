"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Infos from '@/components/infos/Infos'

export default function Home() { 
  const[load, setLoad] = useState(true)
  const[stocksNames, setStocksNames] = useState([])
  const[criptoNames, setCriptoNames] = useState([])

  
  function getStocksNames() {
    fetch('https://brapi.dev/api/available')
      .then(res => res.json())
      .then(res => {
        setStocksNames(res.stocks.slice(0,50))
        setLoad(false)
      })
  }
  function getCriptosNames() {
    fetch('https://brapi.dev/api/v2/crypto/available')
      .then(res => res.json())
      .then(res => {
        setCriptoNames(res.coins.slice(0,50))
        setLoad(false)
      })
  }
  

  useEffect(() => {
    getCriptosNames()
    getStocksNames()
  }, [])
  
  return (
    <>
      {load == false ? (
        <div className={styles.infos}>
            <h2>Ações</h2>
          <div>
            <Infos stocks={stocksNames} type="stocks"/>
          </div>
            <h2>Criptomoedas</h2>
          <div>
            <Infos stocks={criptoNames} type="cripto" />
          </div>
        </div>
      ) : <h1>carregando</h1>}
    </>
  )
}
