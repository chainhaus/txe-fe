import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@app/store/hooks';
import { Header } from './Header';

export const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   return <Navigate to="/signin" />;
  // }

  return (
    <div className="app-default">
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <Header />
          <div className="app-wrapper d-flex" id="kt_app_wrapper">
            <div className="app-container container-fluid d-flex"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  // if (isLoggedIn) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div
      className="app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat min-vh-100"
      style={{ backgroundImage: "url('/img/bg4.jpg')" }}
    >
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <a href="../../demo44/dist/index.html" className="mb-7">
                <img alt="Logo" src="/img/custom-3.svg" />
              </a>
              <h2 className="text-white fw-normal m-0">
                Branding tools designed for your business
              </h2>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
