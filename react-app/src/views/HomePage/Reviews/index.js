import apostrophe from './apostrophe.png'

const ReviewCard = ({ className = '', name, review, designation, image }) => {
  return (
    <div
      className={`rounded-lg my-4 lg:my-0 p-4 bg-light-100 col-span-3 ${className}`}
    >
      <div className="flex items-center">
        <img
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
          }}
          className="bg-light-900"
          src={image}
        />
        <div className="ml-4">
          <h5>{name}</h5>
          <h6 className="font-semibold">{designation}</h6>
        </div>
      </div>
      <p className="pt-2">{review}</p>
    </div>
  )
}
const Reviews = () => {
  return (
    <div className="flex bg-dark-700">
      <div className="hidden lg:block lg:w-1/3 bg-primary-900 text-center">
        <img src={apostrophe} alt="apostrophe" className="w-3/4 mx-auto" />
        <h2 className="text-6xl text-light-100 font-semibold">
          Customer
          <br />
          Stories
        </h2>
      </div>
      <div className="lg:w-2/3 lg:grid grid-rows-3 gap-8 grid-cols-8 p-8">
        <ReviewCard
          className="col-start-3"
          name="Glen Robertson"
          designation="Twitter Sensation"
          image={'https://randomuser.me/api/portraits/men/63.jpg'}
          review={`
Loved it from day one . 10/10 would recommend to everyone.
`}
        />
        <ReviewCard
          className="col-start-6"
          name="Ethan Johnston"
          designation="blogger"
          image="https://randomuser.me/api/portraits/men/44.jpg"
          review="
        The amazingly low service charges make this a really valuable product
        "
        />
        <ReviewCard
          className="row-start-2 col-start-1"
          name="Byron Howard"
          designation="Businessman"
          review="I was amazed to see the slick UI. It's one of the best I have ever seen"
          image="https://randomuser.me/api/portraits/men/95.jpg"
        />
        <ReviewCard
          className="row-start-2 col-start-4"
          name="Stacey Lewis"
          designation="Data Analyst"
          review="I like fundraisers! I love RAIZE! The amazing visualizations on the platform are a great attraction"
          image="https://randomuser.me/api/portraits/women/90.jpg"
        />
        <ReviewCard
          className="row-start-3 col-start-3"
          name="Brennan Snyder"
          designation="Student"
          review="NFTs is what I am here for! Its so cool that this platform allows gifting them"
          image="https://randomuser.me/api/portraits/men/67.jpg"
        />
        <ReviewCard
          className="row-start-3 col-start-6"
          name="Sasha Blanc"
          designation="Architect"
          review="I do fundraisers on Raize every birthday!"
          image="https://randomuser.me/api/portraits/women/35.jpg"
        />
      </div>
    </div>
  )
}
export default Reviews
