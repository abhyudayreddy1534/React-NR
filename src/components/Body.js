import RestaurantCard from "./RestaurantCard";
import responseList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State variable :: super powerful variable
  let [listOfRestaurants, setListOfRestaurants] = useState(responseList);
  /****
   * let arr = userState(responseList)
   * let listOfRestaurants = arr[0]
   * let setListOfRestaurants = arr[1]
   * 
   * The above syntax un uncommeted line is simply a destructuring on the fly. 
   * */ 
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("all 3 and abovebutton clicked");
            setListOfRestaurants(
              responseList.filter(
                (res) => res.ratings.rating_bayesian10_point >= 3
              )
            );
          }}
        >
          Top Rated restaurants with above 3.0
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("4 above button clicked");
            setListOfRestaurants(
              responseList.filter(
                (res) => res.ratings.rating_bayesian10_point > 4
              )
            );
          }}
        >
          Top Rated restaurants with above 4.0
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("4.5 button clicked");
            setListOfRestaurants(
              responseList.filter(
                (res) => res.ratings.rating_bayesian10_point > 4.5
              )
            );
          }}
        >
          Top Rated restaurants with above 4.5
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              responseList.filter((res) =>
                res.cuisines.find((e) => e === "Indian")
              )
            );
          }}
        >
          Indian
        </button>
      </div>

      <div className="restaurant-container">
        {
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.restaurant_id} data={restaurant} />
          ))
          /* {responseList.map(restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)} */
        }
      </div>
    </div>
  );
};

export default Body;
