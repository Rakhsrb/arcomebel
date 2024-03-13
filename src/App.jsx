import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { Home } from "./Pages/Home";
import { Guestroom } from "./Pages/Guestroom";
import { Kitchen } from "./Pages/Kitchen";
import { Bedroom } from "./Pages/Bedroom";
import { Hool } from "./Pages/Hool";
import { Coupe } from "./Pages/Coupe";
import { Babyroom } from "./Pages/Babyroom";
import { Sofa } from "./Pages/Sofa";
import { Detail } from "./Pages/Detail";
import { Cart } from "./Pages/Cart";
import { Search } from "./Pages/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "kitchen",
          element: <Kitchen />
        },
        {
          path: "guestroom",
          element: <Guestroom />
        },
        {
          path: "bedroom",
          element: <Bedroom />
        },
        {
          path: "hool",
          element: <Hool />
        },
        {
          path: "coupe",
          element: <Coupe />
        },
        {
          path: "babyroom",
          element: <Babyroom />
        },

        {
          path: "sofa",
          element: <Sofa />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: ':id',
          element: <Detail />
        },
        {
          path: 'search',
          element: <Search />
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
