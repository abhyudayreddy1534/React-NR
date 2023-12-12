import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [prodInfo, setProdInfo] = useState(null);
  // const [prodImages, setProdImages] = useState();
  const { resId } = useParams();

  const prodInfo = useRestaurantMenu(resId);
  const prodImages = prodInfo.images;

  //   returning with if condition as the object is NULL by default so ternary operator won't work here.
  if (prodInfo === null) return <Shimmer />;

  const { title, category, price, brand } = prodInfo;

  return !prodInfo ? (
    <Shimmer />
  ) : (
    <div className="main-container">
      <div className="restaurant-info">
        <h1>{title}</h1>
        <h3>
          {category} | {brand} | ${price}
        </h3>
      </div>
      <div className="menu-items">
        {prodImages.map((x) => (
          <img className="res-card-logo" src={x}></img>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
