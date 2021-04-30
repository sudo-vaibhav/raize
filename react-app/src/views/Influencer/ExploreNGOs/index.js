import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
// import ngoImage from './ngo-card.png'
import { db } from '../../../firebase'

const NGOCard = ({ data }) => {
  return (
    <Card className="my-4">
      <div className="flex items-center">
        <img
          alt="ngo-card"
          className="w-100 rounded-lg mr-4"
          style={{
            width: 100,
            height: 100,
          }}
          src={
            data.organizationLogo
            // ngoImage
          }
        />
        <div>
          <h3 className="text-lg my-2 font-semibold">
            {data.organizationName}
          </h3>
        </div>
      </div>
      <div>
        <div>
          <p className="text-sm my-4">{data.description}</p>
          <div className="flex justify-end">
            <Link
              to={`/influencer/start-campaign/${data.id}`}
              className="w-3/5 p-2 text-center rounded-lg text-light-100 bg-primary-900"
            >
              Start Fundraiser
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

const Explore = () => {
  const [ngos, setNgos] = useState([])

  useEffect(() => {
    db.collection('ngo')
      .get()
      .then((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          {
            docs.push({ id: doc.id, ...doc.data() })
          }
        })

        setNgos(docs)
      })
  }, [])

  console.log(ngos)

  return (
    <div className="mx-auto  container pb-20">
      <div className="px-5 ">
        <h2 className="font-bold text-2xl pb-2 pt-5">NGOs that Need You</h2>
        {ngos.map((e, i) => {
          return <NGOCard data={e} key={i} />
        })}
      </div>
    </div>
  )
}

export default Explore
