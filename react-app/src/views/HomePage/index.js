import Features from './Features'
import Reviews from './Reviews'
import Hero from './Hero'
import Piggybank from './Piggybank'
const HomePage = () => {
  return (
    <div className="bg-dark-500">
      <Hero />
      <Features />
      <Piggybank />
      <Reviews />
    </div>
  )
}

export default HomePage
