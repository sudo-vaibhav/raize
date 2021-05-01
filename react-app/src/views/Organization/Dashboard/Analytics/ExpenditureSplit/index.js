import Card from '../../../../../components/Card'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ labels, data }) => {
  return (
    <>
      <h5 className="text-lg font-medium">
        Suggested Expenditure Based on News
      </h5>
      <Pie
        data={{
          labels: labels.filter((x, i) => data[i] !== 0),
          datasets: [
            {
              label: '# of Votes',
              data: data.filter((x) => x !== 0),
              backgroundColor: ['#4CCDB7', '#8B7AFC', '#FE0000', '#1DA1F2'],
              // borderColor: [
              //   'rgba(255, 99, 132, 1)',
              //   'rgba(54, 162, 235, 1)',
              //   'rgba(255, 206, 86, 1)',
              // ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </>
  )
}

const ExpenditureSplit = ({ className, labels, data }) => {
  return (
    <Card className={className}>
      <PieChart {...{ labels, data }} />
    </Card>
  )
}

export default ExpenditureSplit
