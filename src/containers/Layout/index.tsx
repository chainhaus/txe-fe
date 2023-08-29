import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../store/hooks';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="app-default">
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <Header />
          <div className="app-wrapper d-flex" id="kt_app_wrapper">
            <div className="app-container container-fluid d-flex">
              <Sidebar />
              <div className="app-main flex-column flex-row-fluid">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div
      className="app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center"
      style={{ backgroundImage: "url('/img/bg10.jpeg')" }}
    >
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid min-vh-100">
          <div className="d-flex flex-lg-row-fluid">
            <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
              <img
                className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                src="/img/agency.png"
                alt=""
              />
              <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">
                Fast, Efficient and Productive
              </h1>
              <div className="text-gray-600 fs-base text-center fw-semibold">
                In this kind of post,
                <a href="#" className="opacity-75-hover text-primary me-1">
                  the blogger
                </a>
                introduces a person they’ve interviewed
                <br />
                and provides some background information about
                <a href="#" className="opacity-75-hover text-primary me-1">
                  the interviewee
                </a>
                and their
                <br />
                work following this is a transcript of the interview.
              </div>
            </div>
          </div>
          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
            <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
