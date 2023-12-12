import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://dummyjson.com/products/" + resId
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData);
  };

  return resInfo;
};

export default useRestaurantMenu;
