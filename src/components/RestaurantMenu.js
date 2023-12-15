import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [prodInfo, setProdInfo] = useState(null);
  const [prodImages, setProdImages] = useState();
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://dummyjson.com/products/" + resId
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setProdInfo(jsonData);
    setProdImages(jsonData.images);
  };

  //   returning with if condition as the object is NULL by default so ternary operator won't work here.
  if (prodInfo === null) return <Shimmer />;

  const { title, category, price, brand, description } = prodInfo;

  return !prodInfo ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-100">
      <div className="p-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h3 className="font-normal">
          {category} | {brand} | ${price}
        </h3>
        <p className="font-thin text-slate-900">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {prodImages.map((x) => (
          <img
            className="m-5 object-contain w-[300] h-[200] shadow-xl bg-white"
            src={x}
          ></img>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
