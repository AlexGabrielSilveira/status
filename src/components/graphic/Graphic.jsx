
import ApexCharts from 'apexcharts'
import styles from './graphic.module.css'
import { useEffect } from 'react'
import moment from "moment";

export default function Graphic ({ stock }) {

    let options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30,40,35,49,60,70,91,70]
        }],
        xaxis: {
          categories: [1,2,3,4,5,6,7,8]
        } 
      }
      useEffect(() => {
        let chart = new ApexCharts(document.querySelector("#chart"), options)
        chart.render()
     },[] ) 


     let makertCap = Math.round(stock.marketCap)
     let variation = stock.regularMarketChangePercent.toFixed(2)
    return (
      <>
          <div className={styles.chart_container}>
            <div id="chart" className={styles.chart}></div>
            <hr />
            <div className={styles.infos}>
                <p>Preço<span>R$ {stock.regularMarketPrice}</span></p>
                <p>Variação (dia)<span>{variation > 0 ? <span>{variation}%🔼</span> : <span>{variation}%🔽</span>}</span></p>
                <p>Alta do Dia <span>R$ {stock.regularMarketDayHigh} 🔼</span></p>
                <p>Baixa do Dia <span>R$ {stock.regularMarketDayLow} 🔽</span></p>
                <p>Valor de Mercado <span>R$ {makertCap} Bi</span></p>
            </div>
          </div>
          <div>
            <h1 className={styles.dividend_title}>Dividendos</h1>
            {stock.dividendsData != [''] ? (
                <div className={styles.container_dividends}>
                    {stock.dividendsData.cashDividends.map((dividend) => (
                      <ul key={dividend.rate}>
                        <li><span>Pagamento:</span> {moment(`${dividend.paymentDate}`).utc().format('DD/MM/YYYY')}</li>
                        <li className={styles.price}><span>R$</span> {dividend.rate.toFixed(2)}</li>
                      </ul>
                    ))}
                </div>
              ) : ''}
          </div>
    </>
    )
}