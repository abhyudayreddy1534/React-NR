import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemList, setShowIndex }) => {
  //   const [showItemList, setShowItemList] = useState(false);
  const handleClick = () => {
    // setShowItemList(!showItemList);
    setShowIndex();
    console.log("accordion clicked");
  };

  return (
    <div>
      <div
        className="my-5 p-2 bg-slate-600 flex justify-between shadow-xl cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-white font-bold text-lg">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span>{showItemList ? "🔼" : "🔽"}</span>
      </div>
      {showItemList && <ItemList data={data.card.card.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
