"use client"

import {useParams} from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './stock.module.css'
import Image from 'next/image'
import Graphic from '@/components/graphic/Graphic'

export default function StockPage() {
    const[stockInfo, setStockInfo] = useState([])
    const[load, setLoad] = useState(true)

    const params = useParams()

    function getStockInfos() {
        fetch(`https://brapi.dev/api/quote/${params.name}?range=10y&interval=1mo&fundamental=true&dividends=true`)
        .then(res => res.json())
        .then(res => {
            setStockInfo(res?.results[0])
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
                    <div className={styles.stockInfo}>
                        <div className={styles.imgInfos}>
                            <Image src={stockInfo.logourl} width={64} height={64} alt='logo'/>
                            <div className={styles.titles}>
                                <span className={styles.stockTitle}>{stockInfo.symbol}</span>
                                <span>{stockInfo.longName}</span>
                            </div>
                        </div>
                        <div className={styles.date}>
                            <p>ultima atualização:</p>
                            <span>{formatDate}</span>
                        </div>
                    </div>
                    <Graphic stock={stockInfo} />
                </div>

            ): <h1 className={styles.load}>carregando</h1>}
        </>
    )
}