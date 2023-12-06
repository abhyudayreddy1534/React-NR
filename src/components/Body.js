import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    console.log(jsonData);
    setListOfRestaurants(jsonData["products"]);
    setFilteredProducts(jsonData["products"]);
  };

  const emptySearchText = () => {
    setSearchtext("");
  };
  //conditional rendering: render content according to condition is called conditional rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        ></input>
        <button
          className="filter-btn"
          onClick={() => {
            //filter the content
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
          className="filter-btn"
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
          className="filter-btn"
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
          className="filter-btn"
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
          className="filter-btn"
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
        <label className="info-lbl">
          Showing {filterProducts.length} products
        </label>
      </div>

      <div className="restaurant-container">
        {
          filterProducts.map((product) => (
            <RestaurantCard key={product.id} data={product} />
          ))
          /* {responseList.map(restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)} */
        }
      </div>
    </div>
  );
};

export default Body;
