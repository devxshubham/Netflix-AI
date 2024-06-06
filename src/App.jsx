import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

const Router = createBrowserRouter([
  {
    path : '/',
    element : <Login />
  },
  {
    path : '/browse',
    element : <Browse/>
  }
])

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
