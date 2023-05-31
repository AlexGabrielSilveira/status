"use client"

import {useParams} from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './stock.module.css'
import Image
 from 'next/image'

export default function stockPage() {
    const[stockInfo, setStockInfo] = useState([])
    const[load, setLoad] = useState(true)

    const params = useParams()

    function getStockInfos() {
        fetch(`https://brapi.dev/api/quote/${params.name}?range=1d&interval=1d&fundamental=true`)
        .then(res => res.json())
        .then(res => {
            setStockInfo(res.results[0])
            console.log(res.results[0])
            setLoad(!load)
        })
    }
    
    
    
    useEffect(() => {
        getStockInfos()
    },[])
    
    
    let d = Date.parse(stockInfo.regularMarketTime)
    let newDate = new Date(d)
    let formatDate= newDate.toLocaleString('pt-BR', { timeZone: 'UTC'})
    

    return (
        <>
            {load == false ? (
                <div className={styles.container}>
                    <Image src={stockInfo.logourl} width={64} height={64} alt='logo'/>
                    <div className={styles.stockInfo}>
                        <div className={styles.titles}>
                            <span className={styles.stockTitle}>{stockInfo.symbol}</span>
                            <span>{stockInfo.longName}</span>
                        </div>
                        <div className={styles.date}>
                            <p>ultima atualização:</p>
                            <span>{formatDate}</span>
                        </div>
                    </div>
                </div>
            ): <h1>carregando</h1>}
        </>
    )
}