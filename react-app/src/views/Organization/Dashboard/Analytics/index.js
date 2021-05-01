// import Card from '../../../../components/Card'
import { useState, useEffect } from 'react'
import TopDonations from '../../../../components/Organization/TopDonations'
import ExpenditureSplit from './ExpenditureSplit'
import GeographicSplit from './GeographicSplit'
import axios from '../../../../helpers/axiosForAPI'
import News from './News'
// import { db } from '../../../../firebase'
// import { useAuth } from '../../../../contexts/AuthContext'
const LiveAnalytics = ({ influencers, donations, ngoData, campaigns }) => {
  // const [organizationData, setOrganizationData] = useState()

  const [{ labels, data, news }, setData] = useState({
    labels: [],
    data: [],
    news: [],
  })

  // const data =

  useEffect(() => {
    ;(async () => {
      const temp = await axios.get('/sentiment_split')
      const countData = temp.counts
      // console.log(vals)
      setData({
        labels: Object.keys(countData),
        data: Object.values(countData),
        news: temp.headlines,
      })
      // Object.vals()
    })()
  }, [])

  return (
    <div
      className="mx-auto container "
      style={{
        height: 'calc(100vh - 146px)',
      }}
    >
      {/* {currentUser.uid + currentUser.displayName} */}
      <div
        className="grid grid-cols-7 grid-rows-2 py-8 gap-8"
        style={{ maxHeight: '70vh' }}
      >
        <ExpenditureSplit
          {...{ labels, data }}
          className="col-start-1 col-span-2 pb-20"
        />
        <GeographicSplit className="col-start-3 col-span-3" />
        <TopDonations
          {...{ influencers, donations, campaigns }}
          className="col-start-6 col-span-2 row-span-2"
        />
        <News news={news} className="col-start-1 row-start-2 col-span-5" />
      </div>
    </div>
  )
}

export default LiveAnalytics
