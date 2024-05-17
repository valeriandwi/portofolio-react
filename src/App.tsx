import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
