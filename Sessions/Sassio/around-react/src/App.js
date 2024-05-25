// eslint-disable-next-line no-unused-vars
import react from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import "./css/fma-general.css"
import "./css/fma-responsive.css"
import "./css/style.css"
import "./css/style-responsive.css"

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/services', element: <Services />},
  {path: '/portfolio', element: <Portfolio />},
  {path: '/contact', element: <Contact />},
  {path: '/blog', element: <Blog />},
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
