import Card from '../../../../../components/Card'
import { Doughnut } from 'react-chartjs-2'
import { platformColorMap } from '../../../../../constants'

const platforms = ['youtube', 'twitter', 'instagram']
// const data =
const DoughnutChart = ({ donations }) => {
  console.log(donations)
  const platformWise = {
    youtube: 0,
    twitter: 0,
    instagram: 0,
  }

  donations.forEach((donation) => {
    platformWise[donation.platform] += donation.amount
  })

  console.log(platformWise)
  return (
    <>
      <Doughnut
        data={{
          labels: Object.keys(platformWise),
          datasets: [
            {
              //   label: '# of Votes',
              data: Object.values(platformWise),
              backgroundColor: platforms.map((e) => platformColorMap[e]),
              borderColor: platforms.map((e) => 'rgba(255,255,255,0)'),
              borderWidth: 1,
            },
          ],
        }}
        options={{
          borderAlign: 'inner',
          borderWidth: 0,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
            },
          },
        }}
      />
    </>
  )
}

const SocialsSplit = ({ className, donations }) => {
  return (
    <Card className={className}>
      <h3 className="font-medium text-lg">Platform-wise Split</h3>
      <DoughnutChart donations={donations} />
    </Card>
  )
}

export default SocialsSplit
