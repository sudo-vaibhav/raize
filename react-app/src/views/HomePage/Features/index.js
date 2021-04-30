const Features = () => {
  return (
    <section className="container mx-auto text-center my-10">
      <h2 className="text-light-100 text-3xl">
        A Digital Sidekick for the Real Superheroes
      </h2>
      <p className="lg:w-1/2 mx-auto text-light-900 my-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo massa
        curabitur aliquet mattis quis tellus ullamcorper arcu est. Vulputate vel
        integer elementum eu iaculis fringilla elementum augue.
      </p>
      <div className="grid grid-rows-3 gap-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3  lg:w-3/4 mx-auto my-10">
        {[
          {
            name: 'Feature 1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo massacurabitur aliquet mattis quis tellus ullamcorper arcu est. Vulputatevel integer elementum eu iaculis fringilla elementum augue.',
          },
          {
            name: 'Feature 2',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo massacurabitur aliquet mattis quis tellus ullamcorper arcu est. Vulputatevel integer elementum eu iaculis fringilla elementum augue.',
          },
          {
            name: 'Feature 3',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo massacurabitur aliquet mattis quis tellus ullamcorper arcu est. Vulputatevel integer elementum eu iaculis fringilla elementum augue.',
          },
        ].map((e) => {
          return (
            <div className="rounded-md bg-light-100 p-4 text-left" key={e.name}>
              <h4 className="text-light-900 my-3">{e.name}</h4>
              <p>{e.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Features
