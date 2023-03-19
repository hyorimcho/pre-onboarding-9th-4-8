import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

const Router = () => {
  const router = createBrowserRouter([{ path: '/', element: <Main /> }]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
