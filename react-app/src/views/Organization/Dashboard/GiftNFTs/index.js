import heartOfGold from './heartOfGold.png'
import Card from '../../../../components/Card'
import FeatherIcon from 'feather-icons-react'
import TopDonations from '../../../../components/Organization/TopDonations'
import Modal from 'react-modal'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import giftAnimation from '../../../../lotte/gift.json'

Modal.setAppElement('#root')

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

const GiftNFTs = () => {
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
                  <img src={heartOfGold} className="w-full" alt="nft" />
                  <h6>Heart of Gold</h6>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary-900">#68220</span>
                    <span className="font-semibold">2 remaining</span>
                  </div>
                  <button
                    onClick={openModal}
                    className="text-secondary-900 bg-secondary-500 flex p-3 w-full justify-center mt-4 rounded-lg"
                  >
                    <FeatherIcon icon="gift" />
                    <span className="pl-3">Gift Now</span>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
        <TopDonations showButton={false} className="col-start-6 col-span-2" />
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
              Donation Successful
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
            onInflucencerSelect={() => {
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
