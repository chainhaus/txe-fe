import { useAuth } from '@app/store/hooks';
import { Link } from 'react-router-dom';

export const HeaderMenu = () => {
  const { logout } = useAuth();
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src="/img/300-5.jpg" />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              Test
              <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
            </div>
            <a href="#" className="fw-bold text-muted text-hover-primary fs-7">
              Test1
            </a>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to={'/crafted/pages/profile'} className="menu-link px-5">
          My Profile
        </Link>
      </div>

      <div className="menu-item px-5">
        <a href="#" className="menu-link px-5">
          <span className="menu-text">My Projects</span>
          <span className="menu-badge">
            <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
          </span>
        </a>
      </div>

      <div className="menu-item px-5">
        <a href="#" className="menu-link px-5">
          My Statements
        </a>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5 my-1">
        <Link to="/crafted/account/settings" className="menu-link px-5">
          Account Settings
        </Link>
      </div>

      <div className="menu-item px-5">
        <a className="menu-link px-5" onClick={logout}>
          Sign Out
        </a>
      </div>
    </div>
  );
};

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
          <div className="app-navbar flex-shrink-0 user-avatar">
            <div className="app-navbar-item ms-1 ms-lg-4">
              <div className="cursor-pointer symbol symbol-35px symbol-md-40px">
                <img
                  className="symbol symbol-35px symbol-md-40px"
                  src="/img/300-5.jpg"
                  alt="user"
                />
              </div>
            </div>
            <HeaderMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
