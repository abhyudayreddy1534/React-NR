import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav items (Home, Order, About, Contact, Profile, Cart)
 * Body
 * - Search
 * - Restaurant card container
 *  - Restro card grid
 *    - image
 *    - res name
 *    - star rating
 *    - ETA
 *    - cuisine
 * Footer
 * - Copyright
 * - links
 * - Address
 * - Contact
 *
 *
 */

const pistahouseLogo =
  "https://cdn.siasat.com/wp-content/uploads/2022/05/IMG_15052022_134550_1200_x_900_pixel.png";
const tacoBellLogo =
  "https://1000logos.net/wp-content/uploads/2017/06/Taco-Bell-Logo.png";
const sarigamaLogo =
  "https://png.pngtree.com/template/20190214/ourmid/pngtree-coffee-and-tea-logo-image_54910.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Order</li>
          <li>About</li>
          <li>Contact</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
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
        <img className="res-card-logo" src={props.image}></img>
      </div>
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating} *</h4>
      <h4>{props.eta} min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restaurant-container">
        <RestaurantCard
          name="Pista House"
          cuisine="Biryani, North Indian"
          rating="4.4"
          eta="32"
          image={pistahouseLogo}
        />
        <RestaurantCard
          name="Taco Bell"
          cuisine="Mexican, Fast food"
          rating="4.2"
          eta="27"
          image={tacoBellLogo}
        />
        <RestaurantCard
          name="Sarigama"
          cuisine="Snacks, Breakfast, Finger food"
          rating="3.8"
          eta="22"
          image={sarigamaLogo}
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
