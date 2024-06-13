// eslint-disable-next-line no-unused-vars
import react from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import "./css/fma-general.css"
import "./css/fma-responsive.css"
import "./css/style.css"


import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Fall from "./pages/Fall";
import Winter from "./pages/Winter"
import Allseasons from "./pages/Allseasons";

const router = createBrowserRouter([
  {path: '/', element: <Spring/>},
  {path: '/summer', element: <Summer/>},
  {path: '/fall', element: <Fall/>},
  {path: '/winter', element: <Winter/>},
  {path: '/allseasons', element: <Allseasons/>},
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
