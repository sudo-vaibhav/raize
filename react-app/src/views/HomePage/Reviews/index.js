import apostrophe from './apostrophe.png'

const ReviewCard = ({ className = '' }) => {
  return (
    <div
      className={`rounded-lg my-4 lg:my-0 p-4 bg-light-100 col-span-3 ${className}`}
    >
      <div className="flex items-center">
        <div
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '50%',
          }}
          className="bg-light-900"
        ></div>
        <div className="ml-4">
          <h5>Vaibhav Chopra</h5>
          <h6 className="font-semibold">Coding Noob</h6>
        </div>
      </div>
      <p>
        “Lorem ipsum dolor” sit amet, consectetur adipiscing elit. “Id
        condimentum ut” id felis viverra nisi.
      </p>
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
        <ReviewCard className="col-start-3" />
        <ReviewCard className="col-start-6" />
        <ReviewCard className="row-start-2 col-start-1" />
        <ReviewCard className="row-start-2 col-start-4" />
        <ReviewCard className="row-start-3 col-start-3" />
        <ReviewCard className="row-start-3 col-start-6" />
      </div>
    </div>
  )
}
export default Reviews
