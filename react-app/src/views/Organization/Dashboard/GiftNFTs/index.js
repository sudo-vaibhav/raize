import heartOfGold from './heartOfGold.png'
import Card from '../../../../components/Card'
import FeatherIcon from 'feather-icons-react'
import TopDonations from '../../../../components/Organization/TopDonations'

const GiftNFTs = () => {
  return (
    <div
      className="container mx-auto"
      style={{
        height: 'calc(100vh - 146px)',
      }}
    >
      <p className="py-5 text-primary-900 font-semibold">
        These tokens are limted and therefore should be given out with due
        consideration
      </p>
      <div className=" grid gap-4 grid-cols-7">
        <div className="col-span-5">
          <div
            className="grid gap-4 mb-10"
            style={{
              gridTemplateColumns: ' repeat(auto-fit, minmax(200px, 1fr))',
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <Card>
                  <img src={heartOfGold} className="w-full" />
                  <h6>Heart of Gold</h6>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-900">#68220</span>
                    <span className="font-semibold">2 remaining</span>
                  </div>
                  <button className="text-secondary-900 bg-secondary-500 flex p-3 w-full justify-center mt-4 rounded-lg">
                    <FeatherIcon icon="gift" />
                    <span className="pl-3">Gift Now</span>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
        <TopDonations className="col-start-6 col-span-2" />
      </div>
    </div>
  )
  // <div className="container mx-auto"></div>
}

export default GiftNFTs
