const RestaurantCard = (props) => {
  const resObj = props.data;
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
        <img
          className="res-card-logo"
          src={resObj.media_image.base_url + resObj.media_image.public_id}
        ></img>
      </div>
      <h3>{resObj.name}</h3>
      <h4>{resObj.cuisines.join(", ")}</h4>
      <h4>{resObj.ratings.rating_bayesian10_point} *</h4>
      {/* <h4>{props.eta} min</h4> */}
    </div>
  );
};

export default RestaurantCard;
