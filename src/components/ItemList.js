import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const imgBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  const dispatch = useDispatch();

  const handleClickAddItemToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((a) => (
        <div key={a.card.info.id}>
          <div className="my-3 flex justify-between">
            <div>
              <p className="font-normal text-xs">
                <span>
                  {a.card.info.itemAttribute.vegClassifier === "NONVEG"
                    ? " 🔺 "
                    : " 🟢 "}
                </span>
                {a.card.info.itemAttribute.vegClassifier}
              </p>
              <p className=" text-black text-lg font-medium">
                {a.card.info.name}
              </p>
              <p className=" text-black text-base font-normal">
                INR{" "}
                {(a.card.info.price
                  ? a.card.info.price
                  : a.card.info.defaultPrice) / 100}
              </p>
              <p className="text-xs font-extralight ">
                {a.card.info.description ? a.card.info.description : ""}
              </p>
            </div>
            <div>
              <button
                className="text-sm font-medium text-green-700 bg-white border border-solid border-green-700 shadow-md absolute px-5 mx-1 rounded-md hover:text-white hover:bg-green-700"
                onClick={() => handleClickAddItemToCart(a)}
              >
                ADD
              </button>
              {a.card.info.imageId ? (
                <img
                  src={imgBaseURL + a.card.info.imageId}
                  alt="YYT"
                  className="w-20 h-14 mr-1 mt-2"
                ></img>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
