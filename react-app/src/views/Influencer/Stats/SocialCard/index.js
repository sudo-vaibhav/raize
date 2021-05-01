import { siteUrl } from '../../../../constants'
import { toast } from 'react-toastify'
import Card from '../../../../components/Card'
import { platformColorMap } from '../../../../constants'
import FeatherIcon from 'feather-icons-react'
// import { siteUrl } from '../../../../constants'

const SocialCard = ({ name, amount, total, selectedCampaignData }) => {
  return (
    <Card className="flex justify-between items-center my-3">
      <div className="flex items-center">
        <FeatherIcon icon={name} stroke={platformColorMap[name]} />
        <div className="ml-4">
          <h4 className="font-semibold">₹{amount} raised</h4>
          <div className="flex mt-2 text-xs text-primary-900 font-semibold ">
            {/* <FeatherIcon
              icon="trending-up"
              stroke={'var(--color-primary-900)'}
              size={14}
            /> */}
            {/* <span className="text-xs ml-2 font-medium text-light-900">
              Up <span className="font-bold text-primary-900">15%</span> since
              yesterday
            </span> */}
            {Math.round((100 * amount) / total)}% of total
            {/* {siteUrl}/organization/donate/{selectedCampaignData.campaignId} */}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          navigator.clipboard.writeText(
            `${siteUrl}/organization/donate/${
              selectedCampaignData.campaignId
            }-${
              {
                youtube: 'yt',
                instagram: 'ig',
                twitter: 'tw',
              }[name]
            }`,
          )
          toast.dark('Copied to Clipboard', {
            position: 'bottom-right',
            autoClose: 5000,

            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }}
      >
        <FeatherIcon icon="paperclip" stroke="var(--color-primary-900)" />
      </div>
    </Card>
  )
}

export default SocialCard
