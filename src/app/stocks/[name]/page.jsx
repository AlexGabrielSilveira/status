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
                    <div className={styles.priceContainer}>
                        <div className={styles.listItems}>
                            <ul>
                                <li><p>Preço </p> <span>{stockInfo.regularMarketPrice}</span></li>
                                <li><p>Variação (dia)</p> <span>{stockInfo.regularMarketChangePercent.toFixed(2)}%</span> </li>
                                <li><p>Alta do Dia </p> <span>{stockInfo.regularMarketDayHigh}</span></li>
                                <li><p>Baixa do Dia </p> <span>{stockInfo.regularMarketDayLow}</span></li>
                                <li><p>Valor de Mercado </p> <span>{stockInfo.marketCap}Bi</span></li>

                            </ul>
                        </div>
                    </div>
                </div>
            ): <h1>carregando</h1>}
        </>
    )
}