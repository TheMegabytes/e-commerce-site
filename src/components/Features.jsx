function Features({ title, description, imgSrc, ctaTitle, classNames }) {
  return (
    <div
      className={`mt-28 px-8 flex items-center xl:gap-0 gap-8 justify-center lg:justify-between flex-wrap ${classNames}`}
    >
      <div className="p-8">
        <img
          src={imgSrc}
          alt={title}
          className="w-md h-112 object-contain flex justify-center items-center"
        />
      </div>
      <div className="flex flex-col items-start gap-4justify-center w-130">
        <span className="text-4xl font-bold">{title}</span>
        <span className="text-base w-[90%]">{description}</span>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium cursor-pointer hover:bg-orange-600">
          {ctaTitle}
        </button>
      </div>
    </div>
  );
}

export default Features;
