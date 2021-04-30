import Card from '../../../../../components/Card'
import { Pie } from 'react-chartjs-2'

const data = {
  labels: ['Beds', 'Oxygen', 'Masks'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#4CCDB7', '#8B7AFC', '#DCD7FF'],
      //   borderColor: [
      //     'rgba(255, 99, 132, 1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //   ],
      borderWidth: 1,
    },
  ],
}

const PieChart = () => (
  <>
    <h5 className="text-lg font-medium">Suggested Expenditure Based on News</h5>
    <Pie
      data={data}
      options={{
        maintainAspectRatio: false,
      }}
    />
  </>
)

const ExpenditureSplit = ({ className }) => {
  return (
    <Card className={className}>
      <PieChart />
    </Card>
  )
}

export default ExpenditureSplit
