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

const responseList = [
  {
    cuisines: [
      "Asian",
      "Curry",
      "Lunch Specials",
      "Noodles",
      "Soup",
      "Thai",
      "Vegan",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1618582535/rple2uothdlsrhiknh4h.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "jcd6hziljgpfthnqxoeg",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "My Thai & Vegan",
    ratings: {
      rating_bayesian10_point: 4.2,
    },
    restaurant_id: "2699214",
  },
  {
    cuisines: ["Mediterranean", "Dessert", "Salads"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1649153883/w3xqks6vlayc00zdfisr.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "afsyoy2mcqovw31ir4ks",
      format: "png",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Big Guys Chicken and Rice",
    ratings: {
      rating_bayesian10_point: 4.7,
    },
    restaurant_id: "3252524",
  },
  {
    cuisines: ["Indian"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1666377461/v4wnr2xycgksuzx0jqtp.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "d3tqlvbiggzrrkt0f0ev",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Rumali",
    ratings: {
      rating_bayesian10_point: 4.0,
    },
    restaurant_id: "4889216",
  },
  {
    cuisines: ["Chicken", "Kids Menu", "Seafood", "Soup", "Vegetarian"],
    logo: "https://res.cloudinary.com/grubhub/image/upload/v1462383035/qlotyea1qygnkfpoapec.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "pmawfdhayod5mtyfkibl",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Bawarchi Indian Cuisine",
    ratings: {
      rating_bayesian10_point: 4.0,
    },
    restaurant_id: "1750297",
  },
  {
    cuisines: [
      "Indian",
      "Curry",
      "Lunch Specials",
      "Nepalese",
      "Vegetarian",
      "Wraps",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1589788365/dh9wis2cgmup4cy78hwc.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "s02cqqdy7wov92o5ztfc",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Saravanaa Bhavan",
    ratings: {
      rating_bayesian10_point: 4.1,
    },
    restaurant_id: "339995",
  },
  {
    cuisines: ["Mediterranean", "Lunch Specials", "Sandwiches"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1617144656/ow3sj2f3bdeztpnetvca.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "dlmrhbjmt2zp159zsklg",
      format: "png",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Shawarma Press",
    ratings: {
      rating_bayesian10_point: 4.5,
    },
    restaurant_id: "534893",
  },
  {
    cuisines: ["Chicken", "Nepalese", "Noodles"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1683749678/ny10vkoj9cw2tyfhhymp.jpg",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "inboysyauvwy8vneikux",
      format: "png",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Momo2Go",
    ratings: {
      rating_bayesian10_point: 4.0,
    },
    restaurant_id: "6200264",
  },
  {
    cuisines: ["Chicken", "Dessert", "Salads"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1607436335/lcymx6xew7cdzlnryp4w.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "ipeuxj41xiwh30dnuvq6",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Vila Brazil (Irving)",
    ratings: {
      rating_bayesian10_point: 4.2,
    },
    restaurant_id: "2481759",
  },
  {
    cuisines: ["Chinese", "Asian"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1594135709/lsx2d66qmidixfkmaqzj.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "agcernkozhpytgy4sf9q",
      format: "png",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Panda Express",
    ratings: {
      rating_bayesian10_point: 4.3,
    },
    restaurant_id: "1959505",
  },
  {
    cuisines: [
      "Mediterranean",
      "Afghan",
      "Chicken",
      "Grill",
      "Gyro",
      "Halal",
      "Lunch Specials",
      "Seafood",
      "Steak",
      "Vegetarian",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1585611387/dsc3rpywjqmo6q2c4ojs.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "wkv1vvoln5p2tx36vdki",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Kebabs To Go",
    ratings: {
      rating_bayesian10_point: 4.0,
    },
    restaurant_id: "336847",
  },
  {
    cuisines: ["Indian", "Vegetarian"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1591933219/bohfc3w5sj8mwgb2kndc.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "ufl4ccqdxgj48fvlkbk6",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Southern Spice",
    ratings: {
      rating_bayesian10_point: 4.1,
    },
    restaurant_id: "384173",
  },
  {
    cuisines: ["Chicken", "Soup", "Vegetarian"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1664900749/o9y8rsdrjnvkxdkmetzf.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "rc9djoohfyg73qib8tyb",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Monks",
    ratings: {
      rating_count: 38.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.5,
      actual_rating_value: 3.4654058310740177,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "4759968",
  },
  {
    cuisines: ["Mexican", "Tacos"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1595975942/bgnr26qrsdcujyzwi3t3.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "ntkzvxkjs8h4ip4njs3p",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Side Door Taco",
    ratings: {
      rating_count: 150.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.4,
      actual_rating_value: 4.439020608246279,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2293417",
  },
  {
    cuisines: [
      "Fast Food",
      "American",
      "Breakfast",
      "Hamburgers",
      "Sandwiches",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1664988320/epmfoxmswexuhsudmvss.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "vpnyg8qwlckgdxzdrqoc",
      format: "png",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "WHATABURGER",
    ratings: {
      rating_count: 18.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.7,
      actual_rating_value: 3.6832950684587638,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "4803848",
  },
  {
    cuisines: ["Mexican", "Bowls", "Burritos", "Salads", "Tex-Mex"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1595285513/pcizrfonnwrelygiynw2.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "wijh4scqkqbd5fqdgcjj",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Chipotle",
    ratings: {
      rating_count: 272.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.5,
      actual_rating_value: 4.51932422297187,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2126706",
  },
  {
    cuisines: ["Mediterranean", "Lunch Specials"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1613805903/mbhe27rk2o1tbcbjjn0e.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "pj4o6pmha3hjyjra6rxm",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Andalous Mediterranean Grill",
    ratings: {
      rating_count: 2075.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.3,
      actual_rating_value: 4.3151975480004285,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "329472",
  },
  {
    cuisines: ["Pizza", "Hamburgers", "Pasta", "Salads", "Sandwiches", "Wings"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1594410595/vcw47ztkfjnzsqfzw8hk.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "si4nuvn94ff7eywc7oqa",
      format: "png",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Boston's Restaurant & Sports Bar",
    ratings: {
      rating_count: 473.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.4,
      actual_rating_value: 4.368446008535873,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "1454719",
  },
  {
    cuisines: ["Curry", "Pho", "Salads"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1632591390/tgmqwvxgbl8uwrlefglw.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "tgmqwvxgbl8uwrlefglw",
      format: "png",
      tag: "logo",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Yummy Thai Coppell Best Authentic Thai Food Restaurant TX",
    ratings: {
      rating_count: 126.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.6,
      actual_rating_value: 4.601390298220608,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2936425",
  },
  {
    cuisines: [
      "Hamburger",
      "American",
      "Chicken",
      "Hamburgers",
      "Hot Dogs",
      "Shakes",
      "Vegetarian",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1609805144/npp3at7u5pmstkogyelq.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "tyrzmsfszmzl0kumanyb",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Shake Shack",
    ratings: {
      rating_count: 560.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 4.1,
      actual_rating_value: 4.059361468754298,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "1195038",
  },
  {
    cuisines: ["Indian", "Curry", "Soup"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1576870930/eok82mdnpxptwmlskymj.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "unkuvwmfh4fi4ljwpy7u",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Bajeko Sekuwa",
    ratings: {
      rating_count: 60.0,
      rating_value: "3",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 3.9,
      actual_rating_value: 3.916994587684331,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "1722970",
  },
  {
    cuisines: ["Indian", "Breakfast"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1688095322/wy0jeaz9ot4k29xrsvyb.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "wmg5ixiws0f1thvzpdxl",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Urban Tadka",
    ratings: {
      rating_count: 4.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.6,
      actual_rating_value: 3.6238723978587912,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "6473936",
  },
  {
    cuisines: ["Asian", "Chicken", "Lunch Specials", "Noodles", "Thai"],
    logo: "https://res.cloudinary.com/grubhub/image/upload/v1452646252/nz7wt1ei7hdwcddigg3h.jpg",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "ohuzcrvqfqxzisdnkekw",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Yummy Thai",
    ratings: {
      rating_count: 2041.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.7,
      actual_rating_value: 3.734895552122686,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "313619",
  },
  {
    cuisines: ["Dessert", "Halal", "Sandwiches"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1594314349/tlirgumsbe5dzp2tpreu.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "obmues6ag1mwcavvtgle",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "The Halal Guys (Irving, TX)",
    ratings: {
      rating_count: 71.0,
      rating_value: "3",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 4.0,
      actual_rating_value: 3.9996796040828273,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3112966",
  },
  {
    cuisines: ["Indian", "Curry", "Shakes"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1698323231/vtvkxxnq1rhittow6u5m.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "vtvkxxnq1rhittow6u5m",
      format: "png",
      tag: "logo",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Konaseema Ruchulu",
    ratings: {
      rating_count: 2.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.4,
      actual_rating_value: 3.409129731601113,
      hidden: false,
      isTooFew: true,
      too_few: true,
    },
    restaurant_id: "7085280",
  },
  {
    cuisines: [
      "Indian",
      "Asian",
      "Curry",
      "Halal",
      "Indian Chinese",
      "Lunch Specials",
      "Noodles",
      "Snacks",
      "South Indian",
      "Vegetarian",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1616399234/xzbkdmimwtpno0xk1nwj.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "qx96qdxe1vkvpikuuvqt",
      format: "png",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "What The biryani",
    ratings: {
      rating_count: 195.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.5,
      actual_rating_value: 3.518845221074421,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2649698",
  },
  {
    cuisines: [
      "Hamburger",
      "American",
      "Bar Food",
      "Breakfast",
      "Hamburgers",
      "Sandwiches",
      "Snacks",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1612313599/xvfyevnd3hmn81cmclsl.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "bt5idtyt90btrbuz7dib",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Bar Louie",
    ratings: {
      rating_count: 118.0,
      rating_value: "3",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 4.0,
      actual_rating_value: 3.9535734015758646,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2064831",
  },
  {
    cuisines: ["Mexican", "Tacos"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1649439591/n79tkppux7po7b3yplex.jpg",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "pmqbwfcacpkrkid8i1ug",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Mexican Sugar",
    ratings: {
      rating_count: 26.0,
      rating_value: "3",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 3.9,
      actual_rating_value: 3.8682861686610157,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3255957",
  },
  {
    cuisines: [
      "Chinese",
      "Asian",
      "Asian Fusion",
      "Bowls",
      "Chicken",
      "Fast Food",
      "Gluten-Free",
      "Indian Chinese",
      "Lunch Specials",
      "Nepalese",
      "Noodles",
      "Vegan",
      "Vegetarian",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1621008936/lwx5wezilzyw8tz6h8xu.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "elbomopk7mpkeq28irgg",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Delhi Woks",
    ratings: {
      rating_count: 8.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.5,
      actual_rating_value: 3.5351596502073455,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3231795",
  },
  {
    cuisines: [
      "Hamburger",
      "Chicken",
      "Hamburgers",
      "Hot Dogs",
      "Sandwiches",
      "Shakes",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1632496868/ivffmgevslr6i8gwcmiy.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "oobziheltzd2dqu87ehj",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Wayback Burgers",
    ratings: {
      rating_count: 46.0,
      rating_value: "4",
      rating_bayesian_half_point: 5.0,
      rating_bayesian10_point: 4.9,
      actual_rating_value: 4.885166729236723,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "5451056",
  },
  {
    cuisines: ["Hamburger", "Chicken", "Hamburgers", "Sandwiches", "Seafood"],
    logo: "https://media-cdn.grubhub.com/image/upload/v1643742399/stpxadd9vztx0wkvid1c.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "oa3f0qr3qk1jvbryo8qq",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Chili's",
    ratings: {
      rating_count: 99.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.7,
      actual_rating_value: 4.7163799216476185,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3323310",
  },
  {
    cuisines: ["Curry", "Soup"],
    logo: "https://res.cloudinary.com/grubhub/image/upload/v1462383035/qlotyea1qygnkfpoapec.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "mcmzlfl9smipbjmwifqg",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Thiru Kuppusamy Unavagam",
    ratings: {
      rating_count: 45.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.0,
      rating_bayesian10_point: 3.1,
      actual_rating_value: 3.0575210945643834,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3125468",
  },
  {
    cuisines: [
      "Fast Food",
      "American",
      "Bakery",
      "Breakfast",
      "Cafe",
      "Chicken",
      "Coffee and Tea",
      "Hamburgers",
      "Ice Cream",
      "Kids Menu",
      "Sandwiches",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1604203242/u1qpsfyly2thulxf5mek.png",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "grmixeqmvi8kp5pgxszm",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "McDonald's",
    ratings: {
      rating_count: 233.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.3,
      actual_rating_value: 4.291702513449379,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "2473007",
  },
  {
    cuisines: ["Thai", "Vegetarian", "Wings"],
    logo: "https://res.cloudinary.com/grubhub/image/upload/v1462383035/qlotyea1qygnkfpoapec.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "f1lqbaakklupjpcwsnmw",
      format: "jpg",
      tag: "search",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Hot Spice Thai Cuisine",
    ratings: {
      rating_count: 68.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.0,
      rating_bayesian10_point: 4.2,
      actual_rating_value: 4.246040708341266,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "5543736",
  },
  {
    cuisines: [
      "Indian",
      "Breakfast",
      "Chicken",
      "Curry",
      "Family Combo",
      "Indian Chinese",
      "Vegetarian",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1700051196/wrocit3jhjrmzal7zlv0.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "q2xx60wo1j8akp0k1o1m",
      format: "png",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Desi Adda",
    ratings: {
      rating_count: 2.0,
      rating_value: "3",
      rating_bayesian_half_point: 3.5,
      rating_bayesian10_point: 3.5,
      actual_rating_value: 3.5446923163277284,
      hidden: false,
      isTooFew: true,
      too_few: true,
    },
    restaurant_id: "7287672",
  },
  {
    cuisines: ["Asian", "Eclectic", "Lunch Specials", "Sandwiches", "Sushi"],
    logo: "https://res.cloudinary.com/grubhub/image/upload/v1496863219/ynwwqexl7ltfla2e3r09.png",
    media_image: {
      base_url: "https://res.cloudinary.com/grubhub/image/upload/",
      public_id: "aedqg8mxw4iyudwuab4d",
      format: "jpg",
      tag: "search",
      source: "STATIC",
      scale_mode: "FILL",
    },
    name: "Our Glass Restaurant",
    ratings: {
      rating_count: 261.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.5,
      actual_rating_value: 4.53366987157653,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "432973",
  },
  {
    cuisines: [
      "Sandwich",
      "American",
      "Deli",
      "Healthy",
      "Kids Menu",
      "Pasta",
      "Salads",
      "Sandwiches",
      "Soup",
    ],
    logo: "https://media-cdn.grubhub.com/image/upload/v1566401238/bwa6csubecx5yzshleq6.jpg",
    media_image: {
      base_url: "https://media-cdn.grubhub.com/image/upload/",
      public_id: "k5yg8pcbmvelv9fyrvdo",
      format: "jpg",
      tag: "menu",
      source: "RANDOM",
      scale_mode: "FILL",
    },
    name: "Jason's Deli - LBJ",
    ratings: {
      rating_count: 60.0,
      rating_value: "4",
      rating_bayesian_half_point: 4.5,
      rating_bayesian10_point: 4.6,
      actual_rating_value: 4.590238266602404,
      hidden: false,
      isTooFew: false,
      too_few: false,
    },
    restaurant_id: "3062417",
  },
];

const RestaurantCard = (props) => {
  const resObj = props.data
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
        <img className="res-card-logo" src={resObj.media_image.base_url+resObj.media_image.public_id}></img>
      </div>
      <h3>{resObj.name}</h3>
      <h4>{resObj.cuisines.join(", ")}</h4>
      <h4>{resObj.ratings.rating_bayesian10_point} *</h4>
      {/* <h4>{props.eta} min</h4> */}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restaurant-container">
        { responseList.map((restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)

        )
        /* {responseList.map(restaurant) => (<RestaurantCard key={restaurant.restaurant_id} data={restaurant} />)} */}
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
