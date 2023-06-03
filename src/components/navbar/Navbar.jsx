"use client"

import Link from "next/link";
import styles from "./navbar.module.css"
import { useEffect, useState } from "react";

export default function Navbar() {
    const[value, setValue] = useState('')
    
    function handleChange(e) {
        let v = e.target.value
        setValue(v)
    }   
    function getStocks() {
        fetch(`https://brapi.dev/api/quote/${value}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
        })
    }
    useEffect(() => {
        getStocks()
    })
    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/">
                    <h1>STT4 | <span>Status</span></h1>
                </Link>
                <input type="text" placeholder="EX: BBAS3, PETR4, CPLE6" onChange={handleChange} />
            </nav>
            {value != '' ? (
                <>
                    
                </>
            ): ''}
        </>
    )
}