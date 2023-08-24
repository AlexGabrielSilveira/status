"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {  

  let banks = [ "BBAS3","SANB11","BBDC3","ITUB4","ITSA4","CXSE3","BMGB4","BPAN4","BIDI11","ABCB4","B3SA3" ]
  let eletrics = [ "CPLE6","ELET6","TAEE11","TRPL4","ENGI11","EGIE3","AURE3","AESB3" ]

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Bancos</h1>
        <div>
          {banks.map(bank => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/stocks/${bank}`}>{bank}</Link>
          ))}
        </div>
      </div>
      <div className={styles.card}>
      <h1>Eletricas</h1>
        <div>
          {eletrics.map(eletric => (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/stocks/${eletric}`}>{eletric}</Link>
            ))}
        </div>
      </div>
    </div>  
  )
}
