import productImage from './product.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="flex items-center container mx-auto py-12 flex-wrap text-center">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-4xl text-light-100 my-4">
          Donations Done Right&nbsp;✅
        </h1>
        <p className="text-light-900 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo massa
          curabitur aliquet mattis quis tellus ullamcorper arcu est. Vulputate
          vel integer elementum eu iaculis fringilla elementum augue.
        </p>
        <div className="flex flex-wrap my-4">
          {[
            {
              name: 'Influencer',
              link: 'influencer',
            },
            {
              name: 'Organization',
              link: 'organization',
            },
          ].map((e, i) => {
            return (
              <div
                key={e.name}
                className={
                  'w-full p-3 grid place-items-center text-center lg:w-1/2'
                }
              >
                <Link to={`/${e.link}`} className={'btn-primary-900 w-full'}>
                  {e.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="grid place-items-center w-full lg:w-1/2">
        <img src={productImage} className="w-full p-3" alt="product" />
      </div>
    </div>
  )
}

export default Hero
