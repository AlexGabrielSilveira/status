"use client"

import Link from "next/link";
import styles from "./navbar.module.css"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const[value, setValue] = useState([])
    const[info, setInfos] = useState([])
    
    function getKeyDown(e) {
        let v = e.target.value.trim()
        setValue(v)

        if(v.length >= 5) {
            fetch(`https://brapi.dev/api/quote/${v}?fundamental=true`)
            .then(res => res.json())
            .then(res => {
                if(!res.results) {
                    return
                }
                setInfos(res?.results[0])
            })
        }
    }  
    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/">
                    <h1>STAS3 | <span>Status</span></h1>
                </Link>
                <input type="text" placeholder="EX: BBAS3, PETR4, CPLE6" onChange={getKeyDown} />
            </nav>
            {value != '' ? (
            <Link href={`/stocks/${info.symbol}`}>
                <div className={styles.search}>  
                        <Image src={info.logourl} width={50} height={50} alt="logo"/>
                        <div>
                            <h2>{info.symbol}</h2>
                            <h4>{info.longName}</h4>
                            <p>R$ <span>{info.regularMarketPrice}</span></p>
                        </div>
                </div>
            </Link>
            ): ''}
        </>
    )
}