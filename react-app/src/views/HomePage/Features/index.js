import bell from '../../../trinity/bell.svg'
import diamond from '../../../trinity/diamond.svg'
import house from '../../../trinity/house.svg'

const featuresData = [
  {
    asset: bell,
    name: '80G tax exemption',
    description: 'Donations are tax deductible (80G)',
  },
  {
    asset: diamond,
    name: 'NFTs',
    description:
      'Top donors will be provided with a Unique NFT which can be traded further or used to avail attractive items in real world ',
  },
  {
    asset: house,
    name: 'Minimial platform fees',
    description:
      'With just less than 2% platform fees, you can continue doing good without having to worry about burning a hole through your pocket',
  },
]

const Features = () => {
  return (
    <section className="container mx-auto text-center my-10 px-5">
      <h2 className="text-light-100 text-3xl">
        Cybernetically Enhanced Fundraisers
      </h2>
      <p className="lg:w-1/2 mx-auto text-light-900 my-3">
        A Digital Sidekick for the Real Superheroes
      </p>
      <div className="grid grid-rows-3 gap-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3  lg:w-3/4 lg:mx-auto my-10">
        {featuresData.map((e) => {
          return (
            <div
              className="rounded-md text-center bg-light-100 p-4 text-left"
              key={e.name}
            >
              <img
                src={e.asset}
                className="mx-auto"
                style={{
                  maxHeight: 80,
                  maxWidth: 80,
                }}
              />

              <h4 className="text-lg font-medium py-4">{e.name}</h4>
              <p>{e.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Features
