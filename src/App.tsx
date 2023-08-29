import ReduxProvider from './store/provider';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { PublicLayout, PrivateLayout } from './containers/Layout';
import ErrorPage from './containers/error-page';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';

import Dashboard from './containers/Dashboard';
import Order from './containers/Order';
import CurrentPartner from './containers/CurrentPartner';
import PotentialPartner from './containers/PotentialPartner';
import Ticket from './containers/Ticket';

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
        path: '',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ),
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'current-partner',
        element: <CurrentPartner />,
      },
      {
        path: 'potential-partner',
        element: <PotentialPartner />,
      },
      {
        path: 'ticket',
        element: <Ticket />,
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
