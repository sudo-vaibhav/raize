import Card from '../../../../../components/Card'
import { Line } from 'react-chartjs-2'
const DonationAnalysis = ({ donationData, className }) => {
  const options = {
    datasetStrokeWidth: 3,
    // responsive: true,
    maintainAspectRatio: false,
    // aspectRatio: 3,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    plugins: {},
    scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         // beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
  }

  const LineChart = ({ data, className }) => {
    const donations = data.donations
    const dateWise = {}

    donations
      .sort((a, b) => {
        if (a.doneAt > b.doneAt) return 1
        else if (a.doneAt < b.doneAt) return -1
        else return 0
      })
      .forEach((donation) => {
        const doneAt = donation.doneAt
        const dateObj = new Date(doneAt)
        const dateString = dateObj.toLocaleDateString()
        if (dateWise[dateString]) dateWise[dateString] += donation.amount
        else dateWise[dateString] = donation.amount
      })

    console.log(dateWise)

    return (
      <Card className={className}>
        <h2 className="text-lg font-medium">Donation Analysis</h2>

        <Line
          data={(canvas) => {
            // const height = height

            const gradient = canvas
              .getContext('2d')
              .createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, '#00AE91')
            gradient.addColorStop(1, 'rgba(250,255,255,0)')

            return {
              labels: Object.keys(dateWise),

              datasets: [
                {
                  label: 'Donations Received',
                  data: Object.values(dateWise),
                  lineTension: 0.3,
                  borderWidth: 4,
                  fill: 'start',
                  // legend: {
                  //   display: false,
                  // },
                  borderColor: '#00AE91',
                  backgroundColor: gradient,
                },
              ],
            }
          }}
          options={options}
        />
      </Card>
    )
  }
  return <LineChart data={donationData} className={className} />
}

export default DonationAnalysis
