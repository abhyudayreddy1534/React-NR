const RestaurantCard = (props) => {
  const resObj = props.data;

  const { id, title, description, rating, thumbnail, brand, category, price } =
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
    <div className="restaurant-card" style={{ background: "f0f0f0" }}>
      <div className="img-container">
        <img className="res-card-logo" src={thumbnail}></img>
      </div>
      <h3>
        {title} <span className="price">(${price})</span>
      </h3>
      <h4>{description}</h4>
      <h4>{rating} *</h4>
      <h4>
        {category} : {brand}
      </h4>
    </div>
  );
};

export default RestaurantCard;
