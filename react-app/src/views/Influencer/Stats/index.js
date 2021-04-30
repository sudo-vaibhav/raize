import Card from '../../../components/Card'
import { platformColorMap } from '../../../constants'
import FeatherIcon from 'feather-icons-react'

const Stats = () => {
  const donations = [
    {
      platform: 'youtube',
      amount: 120000,
    },
    {
      platform: 'twitter',
      amount: 223000,
    },
    {
      platform: 'instagram',
      amount: 140000,
    },
  ].sort((a, b) => {
    if (a.amount > b.amount) return -1
    else if (a.amount < b.amount) return 1
    return 0
  })

  // to account for raising money more than set goal
  const actualRaised = donations.reduce(
    (a, b) => ({ amount: a.amount + b.amount }),
    {
      amount: 0,
    },
  ).amount

  const target = 700000
  const baseLine = Math.max(target, actualRaised)
  return (
    <div className="px-5 container mx-auto">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl pb-2 pt-5 w-1/2 px-2">
          Hello, Prajakta
        </h2>
        <div className="flex-grow px-2 w-1/2">
          <div className="flex items-center">
            <select className="w-full p-2 rounded-full">
              {[
                'Food for street dogs',
                'Help for Clean drinking water for homeless kids',
              ].map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                )
              })}
            </select>
            <div>
              <FeatherIcon
                icon="plus-circle"
                className="ml-3 text-primary-900"
              />
            </div>
          </div>
        </div>
      </div>
      <Card>
        <h3 className="text-xl font-bold">
          ₹{actualRaised}
          <span className="text-sm text-light-900">&nbsp;generated</span>
        </h3>
        <div
          style={{ height: 16 }}
          className="bg-light-500 flex rounded-lg my-3 rounded-lg"
        >
          {donations.map((e, idx) => {
            return (
              <div
                key={e.platform}
                style={{
                  width: `${(100 * e.amount) / baseLine}%`,
                  backgroundColor: platformColorMap[e.platform],
                }}
                className={
                  idx === 0
                    ? 'rounded-l-lg'
                    : idx === donations.length - 1
                    ? 'rounded-r-lg'
                    : ''
                }
              ></div>
            )
          })}
        </div>
      </Card>
      <div className="flex justify-between my-5">
        <h4 className="text-lg font-semibold">Know your socials</h4>
        <FeatherIcon icon="plus-circle" stroke="var(--color-primary-900)" />
      </div>
      {/* <p className="text-sm font-medium mb-5">
        double tap to copy your unique platform url
      </p> */}
      {donations.map((e) => {
        return (
          <Card className="flex justify-between items-center my-3">
            <div className="flex items-center">
              <FeatherIcon
                icon={e.platform}
                stroke={platformColorMap[e.platform]}
              />
              <div className="ml-4">
                <h4 className="font-semibold">₹{e.amount}</h4>
                <div className="flex mt-2">
                  <FeatherIcon
                    icon="trending-up"
                    stroke={'var(--color-primary-900)'}
                    size={14}
                  />
                  <span className="text-xs ml-2 font-medium text-light-900">
                    Up <span className="font-bold text-primary-900">15%</span>{' '}
                    since yesterday
                  </span>
                </div>
              </div>
            </div>
            <div>
              <FeatherIcon
                icon="chevron-right"
                stroke="var(--color-primary-900)"
              />
            </div>
          </Card>
        )
      })}
    </div>
  )
}
export default Stats
