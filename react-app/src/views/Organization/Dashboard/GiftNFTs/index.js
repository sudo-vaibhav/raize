import heartOfGold from './heartOfGold.png'
import rajwada from './rajwada.png'
import kidDrawing from './kidDrawing.png'
import { db } from '../../../../firebase'
import Card from '../../../../components/Card'
import FeatherIcon from 'feather-icons-react'
import TopDonations from '../../../../components/Organization/TopDonations'
import Modal from 'react-modal'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import giftAnimation from '../../../../lotte/gift.json'

Modal.setAppElement('#root')

const NFTData = [
  {
    asset: heartOfGold,
    name: 'Heart of Gold NFT',
    description: 'Proof that the bearer of this NFT has a heart of gold',
  },
  {
    asset: rajwada,
    name: 'Barmeri NFT',
    description:
      'Claim a rare Barmeri saree next time you visit widow ashram in Jaipur',
  },
  {
    asset: kidDrawing,
    name: 'Lake Scenery NFT',
    description: 'Drawn by the bright kids of North Star Orphanage in Delhi',
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const GiftNFTs = ({ influencers, donations, campaigns, ngoData }) => {
  const [donationSuccess, setDonationSuccess] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div
      className="container mx-auto"
      style={{
        height: 'calc(100vh - 146px)',
      }}
    >
      <p className="py-5 text-primary-900 font-semibold">
        These tokens are limted and therefore would need to be approved by app
        admins before transfer
      </p>
      <div className=" grid gap-4 grid-cols-7">
        <div className="col-span-5">
          <div
            className="grid gap-4 mb-10"
            style={{
              gridTemplateColumns: ' repeat(auto-fit, minmax(200px, 1fr))',
            }}
          >
            {NFTData.map((i) => {
              return (
                <Card key={i.name}>
                  <img src={i.asset} className="w-full" alt="nft" />
                  <h6 className="my-2 text-lg font-semibold">{i.name}</h6>
                  <p className="text-sm">{i.description}</p>
                  {/* <div className="flex justify-between text-sm">
                    <span className="text-primary-900">#68220</span>
                    <span className="font-semibold">2 remaining</span>
                  </div> */}
                  <button
                    // onClick={setSelectedNFT(i.name)}
                    className="text-secondary-900 bg-secondary-500 flex p-3 w-full justify-center mt-4 rounded-lg"
                  >
                    <FeatherIcon icon="gift" />
                    <span className="pl-3">Gift to Influencer</span>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
        <TopDonations
          {...{ influencers, donations, campaigns }}
          showButton={false}
          className="col-start-6 col-span-2"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center">
          <button onClick={closeModal}>
            <FeatherIcon icon="x" />
          </button>
          <h2 className="ml-3 font-semibold text-2xl">Donate NFT</h2>
        </div>
        {donationSuccess ? (
          <div>
            <Player
              src={giftAnimation}
              autoplay
              loop
              keepLastFrame
              style={{ height: '200px', width: '300px', marginTop: '2rem' }}
            />
            <h2 className="font-semibold text-primary-900  text-center text-xl">
              Gift Request Successful
            </h2>
          </div>
        ) : (
          <TopDonations
            showButton={false}
            className=""
            style={{
              width: '50vw',
              boxShadow: 'none',
            }}
            {...{ influencers, donations, campaigns }}
            onInflucencerSelect={async (data) => {
              console.log('on influencer select', data)
              await db.collection('nftrequest').add({
                influencerUId: data.influencerUId,
                // nft: selectedNFT,
              })
              setDonationSuccess(true)
            }}
          />
        )}
      </Modal>
    </div>
  )
  // <div className="container mx-auto"></div>
}

export default GiftNFTs
