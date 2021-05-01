const getSocialsData = (campaignsData, selectedCampaign, donations) => {
  if (!(campaignsData || selectedCampaign)) return []
  let total = 0
  const target =
    campaignsData.find((e) => selectedCampaign === e.id)?.target || 0
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
    total,
    platformWise,
  }
}

export default getSocialsData
