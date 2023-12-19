import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  // // Subscribing to the store, we need cart only, so we are pointing to cart slice.
  //   const cartItems = useSelector((store) => store.cart.items);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClickToDeleteCartItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleClickToClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="my-4 w-6/12 mx-auto bg-slate-100 shadow-lg">
        {cartItems.length > 0 ? (
          <table className="w-11/12 mx-auto ">
            {cartItems.map((item, index) => (
              <tr className="border-b-2 h-9">
                <td>{item.card.info.name}</td>
                <td>
                  {/* {cartItems.reduce((acc, item) => {acc[item] = }, 0)}
                  {cartItems.reduce((acc, item) => {
                    acc[item] === item ? acc + 1 : 1;
                  }, {})} */}
                </td>
                <td className="text-right">
                  INR.
                  {(item.card.info.price
                    ? item.card.info.price
                    : item.card.info.defaultPrice) / 100}
                </td>

                <td>
                  <button
                    className="text-red-600 font-normal text-right"
                    onClick={() => handleClickToDeleteCartItem(index)}
                  >
                    {"  ❌  "}
                  </button>
                </td>
              </tr>
            ))}
            <tr className="border-b-2 h-9 font-bold text-right">
              <td className="">Total</td>
              <td></td>
              <td className="">
                INR.
                {cartItems.reduce(
                  (acc, item) =>
                    acc +
                    (item.card.info.price
                      ? item.card.info.price
                      : item.card.info.defaultPrice) /
                      100,
                  0
                )}
              </td>
              <td className="text-red-500">
                <button onClick={handleClickToClearCart}>Clear Cart</button>
              </td>
            </tr>
          </table>
        ) : (
          <h1 className="font-bold text-xl text-center">Cart Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
