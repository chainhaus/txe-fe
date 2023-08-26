import ReduxProvider from './store/provider';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from './containers/Layout';
import ErrorPage from './containers/error-page';
import Signin from './containers/Signin';
import Dashboard from './containers/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    ),
    children: [
      {
        path: 'signin',
        element: <Signin />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
