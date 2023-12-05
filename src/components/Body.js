import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable :: super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurants(jsonData["products"]);
  };

  //conditional rendering: render content according to condition is called conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("all 3 and abovebutton clicked");
            console.log(listOfRestaurants);
            const filteredProducts = listOfRestaurants.filter(
              (product) => product.rating >= 3
            );
            console.log("filtered");
            console.log(filteredProducts);
            setListOfRestaurants(filteredProducts);
          }}
        >
          Rated above 3.0
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("4 above button clicked");
            console.log(listOfRestaurants);
            const filteredProducts = listOfRestaurants.filter(
              (product) => product.rating >= 4
            );
            console.log("filtered");
            console.log(filteredProducts);
            setListOfRestaurants(filteredProducts);
          }}
        >
          Rated above 4.0
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("4.5 button clicked");
            console.log(listOfRestaurants);
            const filteredProducts = listOfRestaurants.filter(
              (product) => product.rating >= 4.5
            );
            console.log("filtered");
            console.log(filteredProducts);
            setListOfRestaurants(filteredProducts);
          }}
        >
          Rated above 4.5
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Specific brand");
            console.log(listOfRestaurants);
            const filteredProducts = listOfRestaurants.filter(
              (product) => product.brand === "Apple"
            );
            console.log("filtered");
            console.log(filteredProducts);
            setListOfRestaurants(filteredProducts);
          }}
        >
          Apple
        </button>
      </div>

      <div className="restaurant-container">
        {
          listOfRestaurants.map((product) => (
            <RestaurantCard key={product.id} data={product} />
          ))
          /* {responseList.map(restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)} */
        }
      </div>
    </div>
  );
};

export default Body;
