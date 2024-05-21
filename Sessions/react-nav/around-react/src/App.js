import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import "./css/fma-general.css" 
import "./css/fma-responsive.css"
import "./css/homeStyle.css"
import "./css/about-us.css"
import "./css/services.css"
import "./css/portfolio.css"
import "./css/blog.css"
import "./css/blog-details.css"
import "./css/contact-us.css"

import Home from './pages/Home';
import About from "./pages/About";
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio"
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/services', element: <Services />},
  {path: '/portfolio', element: <Portofolio />},
  {path: '/blog', element: <Blog />},
  {path: '/blog-details', element: <BlogDetail />},
  {path: '/contact-us', element: <Contact />}
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
