
import ApexCharts from 'apexcharts'
import styles from './graphic.module.css'
import { useEffect, useState } from 'react'
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

export default function Graphic ({ stock }) {
  function getData() {
    stock.historicalDataPrice.map(historicalDate => {
      let d = new Date(historicalDate.date * 1000)
      let formatDate = moment(d).utc().format('DD/MM/YYYY')

      options.xaxis.categories.push(formatDate)
    })
  }
  function getPrice() {
    stock.historicalDataPrice.map(historicalPrice => {
      let price = parseFloat(historicalPrice.close).toFixed(2)
      options.series[0].data.push(price)
    })
  }
  let options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Preço Teto',
        data: []
      }],
      xaxis: {
        categories: []
      } 
    }
    useEffect(() => {
      getData()
      getPrice()
      let chart = new ApexCharts(document.querySelector("#chart"), options)
      chart.render()
    }, []) 

    let makertCap = Math.round(stock.marketCap)
    let variation = stock.regularMarketChangePercent.toFixed(2)
    let id = uuidv4()

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
                      <ul key={id}>
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