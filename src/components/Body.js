import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State variable :: super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchtext] = useState("");

  /****
   * let arr = userState(responseList)
   * let listOfRestaurants = arr[0]
   * let setListOfRestaurants = arr[1]
   *
   * The above syntax un uncommeted line is simply a destructuring on the fly.
   * */

  useEffect(() => {
    console.log("fetch called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://dummyjson.com/products"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurants(jsonData?.products);
    setFilteredProducts(jsonData?.products);
  };

  const emptySearchText = () => {
    setSearchtext("");
  };
  //conditional rendering: render content according to condition is called conditional rendering

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline please check internet connection!!!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-orange-50">
      <div className="flex items-center bg-orange-300 shadow-md">
        <input
          type="text"
          className="m-4 border border-solid border-black shadow-black shadow-lg"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        ></input>
        <button
          className="bg-orange-700 font-semibold w-28 text-white shadow-lg hover:bg-orange-800"
          onClick={() => {
            //filter the content
            console.log(listOfRestaurants);
            const fProducts = listOfRestaurants.filter(
              (product) =>
                product.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                product.description
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredProducts(fProducts);
          }}
        >
          Search
        </button>
        <button
          className="bg-orange-600 ml-10 font-semibold w-44 text-white hover:bg-orange-700"
          onClick={() => {
            emptySearchText();
            console.log("all 3 and abovebutton clicked");
            console.log(listOfRestaurants);
            const fProducts = listOfRestaurants.filter(
              (product) => product.rating >= 3
            );
            setFilteredProducts(fProducts);
          }}
        >
          Rated above 3.0
        </button>
        <button
          className="bg-orange-600 ml-4 font-semibold w-44 text-white hover:bg-orange-700"
          onClick={() => {
            emptySearchText();
            console.log("4 above button clicked");
            const fProducts = listOfRestaurants.filter(
              (product) => product.rating >= 4
            );
            setFilteredProducts(fProducts);
          }}
        >
          Rated above 4.0
        </button>
        <button
          className="bg-orange-600 ml-4 font-semibold w-44 text-white hover:bg-orange-700"
          onClick={() => {
            emptySearchText();
            console.log("4.5 button clicked");
            const fProducts = listOfRestaurants.filter(
              (product) => product.rating >= 4.5
            );
            setFilteredProducts(fProducts);
          }}
        >
          Rated above 4.5
        </button>
        <button
          className="bg-orange-600 ml-4 font-semibold w-44 text-white hover:bg-orange-700"
          onClick={() => {
            emptySearchText();
            console.log("Specific brand");
            console.log(listOfRestaurants);
            const fProducts = listOfRestaurants.filter(
              (product) => product.brand === "Apple"
            );
            console.log(fProducts);
            setFilteredProducts(fProducts);
          }}
        >
          Apple
        </button>
        <label className="text-gray-500 ml-4 font-medium w-44">
          Showing {filterProducts.length} products
        </label>
      </div>

      <div className="flex flex-wrap justify-center">
        {
          filterProducts.map((product) => (
            <Link key={product.id} to={"/products/" + product.id}>
              <RestaurantCard data={product} />
            </Link>
          ))
          /* {responseList.map(restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)} */
        }
      </div>
    </div>
  );
};

export default Body;
