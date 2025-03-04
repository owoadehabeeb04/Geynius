import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useEffect } from 'react'
ChartJS.register(ArcElement, Tooltip, Legend)

function Visitors(props: any) {
  const { visitorData, setVisitTotal } = props

  useEffect(() => {
    let total = 0
    visitorData.forEach((data: { id: string; value: number }) => {
      total += data.value
    })
    setVisitTotal(total)
  }, [visitorData])

  const data = {
    labels: visitorData.map((data: { id: string; value: number }) => data?.id),
    datasets: [
      {
        label: 'Vistors',
        data: visitorData.map((data: { id: string; value: number }) => data?.value),
        backgroundColor: ['#189DFD', '#000C24'],
        borderColor: ['#189DFD', '#000C24'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className='flex flex-row items-center justify-center px-8'>
      <Doughnut
        width={250}
        height={250}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                boxWidth: 5,
                boxHeight: 5,
              },
            },
          },
        }}
        data={data}
      />
    </div>
  )
}

export default Visitors
