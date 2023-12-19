import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  // // Subscribing to the store, we need cart only, so we are pointing to cart slice.
  //   const cartItems = useSelector((store) => store.cart.items);
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsQuantity = useSelector((store) => store.cart.itemquantity);

  const dispatch = useDispatch();

  const handleClickToDeleteCartItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleClickToClearCart = () => {
    dispatch(clearCart());
  };

  // const newArr = cartItems.reduce(
  //   (acc, val) => (
  //     (acc[val.card.info.id] = acc[val.card.info.id] + 1 || 1), acc
  //   ),
  //   {}
  // );
  // console.log(newArr);
  // console.log(cartItemsQuantity);

  return (
    <div>
      <div className="my-4 w-6/12 mx-auto bg-slate-100 shadow-lg">
        {cartItems.length > 0 ? (
          <table className="w-11/12 mx-auto ">
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.card.info.id} className="border-b-2 h-9">
                  <td>{item.card.info.name}</td>
                  <td>x</td>
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
            </tbody>
          </table>
        ) : (
          <h1 className="font-bold text-xl text-center">Cart Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
