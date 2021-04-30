import Card from '../../../../../components/Card'
import { Doughnut } from 'react-chartjs-2'
import { platformColorMap } from '../../../../../constants'

const platforms = ['youtube', 'twitter', 'instagram']
const data = {
  labels: platforms,
  datasets: [
    {
      //   label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: platforms.map((e) => platformColorMap[e]),
      borderColor: platforms.map((e) => 'rgba(255,255,255,0)'),
      borderWidth: 1,
    },
  ],
}

const DoughnutChart = () => (
  <>
    <Doughnut
      data={data}
      options={{
        // preserveAspectRatio: false
        // borderRadius: 35,
        borderAlign: 'inner',
        // offset: 10,
        borderWidth: 0,
        // radius: 35,
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

const SocialsSplit = ({ className }) => {
  return (
    <Card className={className}>
      <h3 className="font-medium text-lg">Platform-wise Split</h3>
      <DoughnutChart />
    </Card>
  )
}

export default SocialsSplit
