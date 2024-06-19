
import './App.css'
import Counter from './views/Counter'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ToggleVisibilityH from './views/ToggleVisibilityH';
import InputField from './views/InputField';
import FormHandling from './views/FormHandling';
import Array from './views/Array';

function App() {

  const router = createBrowserRouter([
  {path: '/', element: <Counter />},
  {path: '/toggle-visibility', element: <ToggleVisibilityH />},
  {path: '/input-field', element: <InputField />},
  {path: '/form-handling', element: <FormHandling />},
  {path: '/array', element: <Array />}

]);

  return (
    <>
     <h1>Welcome</h1>
     <RouterProvider router={router} />
    </>
  )
}

export default App
1