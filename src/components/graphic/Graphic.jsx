"use client"

import ApexCharts from 'apexcharts'
import styles from './graphic.module.css'

export default function Graphic ({ stock }) {

    console.log(new Date(stock.historicalDataPrice[0].date))

    let options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
      }
      
      let chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();

    return (
        <div id="chart" className={styles.chart}>

        </div>
    )
}