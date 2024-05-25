import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/main";
import PortofolioPage from "./pages/portofolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificatePage from "./pages/certificates";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/portofolio",
      element: <PortofolioPage />,
    },
    {
      path: "/certificate",
      element: <CertificatePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
