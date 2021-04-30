import Card from '../../../../components/Card'
import TopDonations from '../../../../components/Organization/TopDonations'
import ExpenditureSplit from './ExpenditureSplit'
import GeographicSplit from './GeographicSplit'

const LiveAnalytics = () => {
  return (
    <div
      className="mx-auto container "
      style={{
        height: 'calc(100vh - 146px)',
      }}
    >
      <div
        className="grid grid-cols-7 grid-rows-2 py-8 gap-8"
        style={{ maxHeight: '70vh' }}
      >
        <ExpenditureSplit className="col-start-1 col-span-2 pb-20" />
        <GeographicSplit className="col-start-3 col-span-3" />
        <TopDonations className="col-start-6 col-span-2 row-span-2" />
      </div>
    </div>
  )
}

export default LiveAnalytics
