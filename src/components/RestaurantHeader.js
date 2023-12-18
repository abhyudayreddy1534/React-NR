const RestaurantHeader = ({
  data: {
    name: named,
    areaName,
    city,
    cuisines,
    avgRatingString: rating,
    totalRatingsString: totalRatings,
  },
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xl font-semibold">{named}</p>
        <h3 className="text-sm font-normal text-gray-700">
          {cuisines.join(", ")}
        </h3>
        <h3 className="text-sm font-normal text-gray-700">
          {areaName + " " + city}
        </h3>
      </div>
      <div className="border border-solid border-gray-600 rounded-lg">
        <p className="font-bold mx-5 py-2 text-green-700">{rating} ☆</p>
        <hr className="bg-gray-600 h-[2]"></hr>
        <p className="font-normal text-xs mx-1 my-3 text-gray-700">
          {totalRatings}
        </p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
