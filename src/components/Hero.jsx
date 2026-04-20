function Hero() {
  return (
    <div
      className="flex justify-center items-center gap-8 lg:gap-0 lg:justify-between w-[82%] mx-auto mt-28 lg:flex-nowrap
    flex-wrap"
    >
      <div className="flex flex-col w-full gap-4">
        <span className="text-[3.25rem] font-medium">
          Shop smarter. Shop better.
        </span>
        <span className="w-full lg:w-152">
          Discover thousands of products, each carefully selected for quality,
          style, and value bringing everything you need and love into one
          convenient place.
        </span>
        <div className="flex gap-4 mt-8">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600">
            Shop Now
          </button>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600">
            Explore Deals
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-[20rem] lg:w-120 lg:h-100 border border-blue-300 overflow-hidden rounded-xl bg-white">
        <img
          src={"/Hero.jpeg"}
          alt="Shopping hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
