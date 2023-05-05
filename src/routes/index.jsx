import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home";
import EditPage from "../views/EditPage";

// Route definition
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/edit',
        element: <EditPage />
      }
    ]
  }
])


export default router