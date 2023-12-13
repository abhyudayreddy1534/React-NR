const RestaurantCard = (props) => {
  const resObj = props.data;

  const { id, title, description, rating, price, brand, category, thumbnail } =
    resObj;
  // const {name, cuisine, rating, }
  /**
   * can try destructuring like this too
   * const {name, cuisine} = props
   * to avoid using props.name
   *
   * or props param can be replaced with {name, cuine} for on the fly destructuring as well.
   */
  return (
    <div className="bg-white m-5 w-[200] h-[400] shadow-2xl hover:shadow-black rounded-md">
      <div className="m-3 p-2">
        <img
          className="object-fill w-44 h-28 rounded-lg shadow-lg"
          src={thumbnail}
        ></img>
      </div>
      <div className="px-3">
        <h3 className="font-medium">
          {title} <span className="text-red-500">(${price})</span>
        </h3>
        <h4 className="font-thin">{description}</h4>
        <h4 className="font-normal">Rating: {rating} *</h4>
        <h4 className="font-semibold text-pink-600">
          {category} : {brand}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
