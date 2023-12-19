import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Header } from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import FoodOrder from "./components/FoodOrder";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import theStore from "./utils/theStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const data = { name: "Abhyuday Reddy" };

    setUsername(data.name);
  }, []);

  return (
    <Provider store={theStore}>
      <UserContext.Provider value={{ loggedInUser: username }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/profile",
        element: (
          <Suspense
            fallback={<h1>Hey wait...... I'm loading About us here</h1>}
          >
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/products/:resId", element: <RestaurantMenu /> },
      { path: "/food-order", element: <FoodOrder /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
