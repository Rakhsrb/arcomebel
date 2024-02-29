import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { Home } from "./Pages/Home";

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
