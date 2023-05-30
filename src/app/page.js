"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {  
  return (
    <div className={styles.welcome}>
      <h1>Bem-Vindo ao <span>Status</span></h1>
      <p>o melhor site para checar o mercado</p>
      <div className={styles.btn_links}>
        <button>
          <Link href="/cripto">
            Criptomoedas
          </Link>
        </button>
        <button>
          <Link href="/acoes"> 
            Ações
          </Link>
        </button>
        
      </div>
    </div>
    
  )
}
