import Card from '../../../../../components/Card'

const GeographicSplit = ({ className }) => {
  const income = 8000000
  const data = [
    {
      ratio: 0.34,
      state: 'Maharasthra',
    },
    {
      ratio: 0.25,
      state: 'Punjab',
    },
    {
      ratio: 0.17,
      state: 'Delhi',
    },
    {
      ratio: 0.1,
      state: 'Kerala',
    },
    {
      ratio: 0.06,
      state: 'West Bengal',
    },
    {
      ratio: 0.08,
      state: 'Tamil Nadu',
    },
  ].sort((a, b) => {
    if (a.ratio > b.ratio) return -1
    else if (a.ratio < b.ratio) return 1
    return 0
  })
  return (
    <Card className={className}>
      <h5 className="text-lg font-medium">Geographic Insights</h5>
      <div className="grid gap-x-14 grid-cols-2">
        {data.map((e) => {
          return (
            <div className="my-4">
              <div className="flex justify-between items-center">
                {/* <div> */}
                <h6 className="">{e.state}</h6>
                <p className="text-xs">
                  {e.ratio * 100}% |{' '}
                  <span className="font-bold text-primary-900">
                    ₹{e.ratio * income}
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
                    width: `${e.ratio * 100}%`,
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
