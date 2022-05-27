import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Layout from '../../components/Layout'

ChartJS.register(ArcElement, Tooltip, Legend);

const index = () => {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <>
        <Layout>
            <div className='container'>
                <div className='text-center mt-5'>
                    <h1 className='chart-text text-uppercase'>Chart Page</h1>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <Doughnut data={data} width="200px"/>
                </div>
            </div>
        </Layout> 
    </>
  )
}

export default index