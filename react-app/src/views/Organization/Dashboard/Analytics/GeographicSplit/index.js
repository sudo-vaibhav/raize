import Card from '../../../../../components/Card'
import axios from '../../../../../helpers/axiosForAPI'
import { useState, useEffect } from 'react'
import approx from 'approximate-number'

const GeographicSplit = ({ className }) => {
  const [{ income, cases, states }, setData] = useState({
    income: 8000000,
    cases: [],
    states: [],
  })
  useEffect(() => {
    ;(async () => {
      const stateWiseData = await axios.get('/covid_cases_statewise')
      console.log(stateWiseData)

      setData({
        income: 8000000,
        ...stateWiseData,
      })
    })()
  }, [])

  const ratio = []
  const totalCases = cases.reduce((a, b) => a + b, 0)
  // cases.sum()
  cases.forEach((element) => {
    ratio.push(element / totalCases)
  })

  return (
    <Card className={className}>
      <h5 className="text-lg font-medium">Geographic Insights</h5>
      <div className="grid gap-x-14 grid-cols-2">
        {cases.map((e, i) => {
          return (
            <div className="my-3" key={i}>
              <div className="flex justify-between items-center">
                {/* <div> */}
                <h6 className="">{states[i]}</h6>
                <p className="text-xs">
                  {approx(ratio[i] * 100)}% |{' '}
                  <span className="font-bold text-primary-900">
                    ₹{approx(ratio[i] * income)}
                  </span>
                </p>
                {/* </div> */}
              </div>
              <div
                className="bg-light-500 rounded-lg my-2"
                style={{ height: 10 }}
              >
                <div
                  className="h-full rounded-lg bg-primary-900"
                  style={{
                    width: `${Math.round(ratio[i] * 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default GeographicSplit
