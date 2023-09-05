import { useAuth } from '@app/store/hooks';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { profile } = useAuth();
  return (
    <div id="kt_app_header" className="app-header">
      <div
        className="app-container container-fluid d-flex align-items-stretch justify-content-between"
        id="kt_app_header_container"
      >
        <div className="app-header-logo d-flex align-items-center me-lg-9">
          <div
            className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none"
            id="kt_app_header_menu_toggle"
          >
            <i className="ki-outline ki-abstract-14 fs-1"></i>
          </div>
          <Link to="/">
            <img alt="Logo" src="/img/demo44.svg" className="h-25px theme-light-show" />
          </Link>
        </div>

        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch">
            <div className="app-header-menu app-header-mobile-drawer align-items-stretch">
              <div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0">
                {profile.role === 'admin' && (
                  <Link
                    to="/dashboard/client"
                    className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                  >
                    <span className="menu-link">
                      <span className="menu-title">Clients</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </span>
                  </Link>
                )}
                <Link
                  to="/dashboard/event"
                  className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                >
                  <span className="menu-link">
                    <span className="menu-title">Events</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </Link>
                <Link
                  to="/dashboard/order"
                  className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                >
                  <span className="menu-link">
                    <span className="menu-title">Orders</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="app-navbar flex-shrink-0">
            <div className="app-navbar-item ms-1 ms-lg-4">
              <div className="cursor-pointer symbol symbol-35px symbol-md-40px">
                <img
                  className="symbol symbol-35px symbol-md-40px"
                  src="/img/300-5.jpg"
                  alt="user"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
