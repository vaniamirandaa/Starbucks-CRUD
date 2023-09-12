export default function LandingPage() {
  return (
    <>
    <section className="landing">
      <div className="container mx-auto px-4 py-8 mt-8">
        <div className="flex justify-center items-center border border-gray-300 rounded-lg bg-pink-500">
          <div className="w-1/2">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84647.jpg"
              alt="Starbucks Refreshers"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 p-10">
            <h1 className="text-4xl font-bold mb-4">Talk about refreshing</h1>
            <p className="text-lg mb-8 p-10">
              Introducing our vibrant new Frozen Lemonade Starbucks Refreshers® beverages: Strawberry Açaí, Pineapple Passionfruit, and Mango Dragonfruit.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center border border-gray-300 rounded-lg bg-purple-500 mt-8">
          <div className="w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-4">Summer to the max</h2>
            <p className="text-lg mb-8 p-10">
              Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino® blended beverage.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg"
              alt="Summer Frappuccino"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
