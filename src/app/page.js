"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {  

  let banks = [
    {
      ticker: "BBAS3",
      img: "/BBAS3.jfif"
    },
    {
      ticker: "SANB11",
      img: "/SANB11.jfif"
    }, 
    {
      ticker: "BBDC3",
      img: "/BBDC3.jfif"
    },
    {
      ticker: "ITUB4",
      img: "/ITUB4.jfif"
    },
    {
      ticker: "ITSA4",
      img: "/ITSA4.jfif"
    },
    {
      ticker: "CXSE3",
      img: "/CXSE3.png"
    },
    {
      ticker: "BMGB4",
      img: "/BMGB4.png"
    }, 
    {
      ticker: "BPAN4",
      img: "/BPAN4.jfif"
    },
    {
      ticker: "BIDI11",
      img: "/BIDI11.png"
    },
    {
      ticker: "ABCB4",
      img: "/ABCB4.png"
    },
    {
      ticker: "B3SA3",
      img: "/B3SA3.jfif"
    }
  ]    
    
  let eletrics = [ 
    {
      ticker: "CPLE6",
      img: "/CPLE6.png"
    },
    {
      ticker: "ELET6",
      img:"/ELET6.jfif"
    },
    {
      ticker: "TAEE11",
      img: "/TAEE11.jfif"
    },
    {
      ticker: "TRPL4",
      img: "/TRPL4.jfif"
    }, 
    {
      ticker: "ENGI11",
      img: "/ENGI11.jfif"
    }, 
    {
      ticker: "EGIE3",
      img: "/EGIE3.jfif"
    },
    {
      ticker: "AURE3",
      img: "/AURE3.png"
    }, 
    {
      ticker: "AESB3",
      img: "/AESB3.jpg"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>BANCOS</h1>
        <div className={styles.card_summary}>
          {banks.map(bank => (
            // eslint-disable-next-line react/jsx-key
              <Link href={`/stocks/${bank.ticker}`} key={bank.ticker}>{bank.ticker}
                <Image src={bank.img} width={1280} height={720} alt={bank.ticker} />
              </Link>
          ))}
        </div>
      </div>
      <div className={styles.card}>
        <h1>Eletricas</h1>
        <div className={styles.card_summary}> 
        {eletrics.map(eletric => (
            // eslint-disable-next-line react/jsx-key
              <Link href={`/stocks/${eletric.ticker}`} key={eletric.ticker}>{eletric.ticker}
                <Image src={eletric.img} width={1280} height={720} alt={eletric.ticker} />
              </Link>
          ))}
        </div>
      </div>
    </div>  
  )
}
