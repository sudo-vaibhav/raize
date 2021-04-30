// const donations = [
//   {
//     platform: 'youtube',
//     amount: 120000,
//   },
//   {
//     platform: 'twitter',
//     amount: 223000,
//   },
//   {
//     platform: 'instagram',
//     amount: 140000,
//   },
// ]

// // to account for raising money more than set goal
// const actualRaised = donations.reduce(
//   (a, b) => ({ amount: a.amount + b.amount }),
//   {
//     amount: 0,
//   },
// ).amount

// const baseLine = Math.max(target, actualRaised)

const getSocialsData = (campaignsData, selectedCampaign, donations) => {
  if (!(campaignsData || selectedCampaign)) return []
  // console.log('getSocialsData', donations)
  // console.log('getSocialsData', campaignsData, selectedCampaign)
  let total = 0
  const target = campaignsData.find((e) => selectedCampaign === e.id).target
  const platformWise = {
    twitter: 0,
    youtube: 0,
    instagram: 0,
  }

  donations.forEach((donation) => {
    total += donation.amount
    platformWise[donation.platform] += donation.amount
  })

  const baseLine = Math.max(target, total)

  return {
    baseLine,
    target,
    platformWise,
  }
}

export default getSocialsData
