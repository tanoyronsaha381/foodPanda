import { createBrowserRouter } from "react-router-dom";
import ParentContainer from "./Components/ParentContainer";
import { Body } from "./Components/Body";
import Cart from "./Components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ParentContainer />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
