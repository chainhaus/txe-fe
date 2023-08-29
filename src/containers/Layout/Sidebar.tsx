import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="app-sidebar flex-column">
      <div className="menu menu-sub-indention menu-rounded menu-column menu-active-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 py-4 py-lg-6 ms-lg-n7 px-2 px-lg-0">
        <div className="hover-scroll-y px-1 px-lg-5">
          <div className="menu-item">
            <div className="menu-content">
              <span className="menu-section fs-5 fw-bolder ps-1 py-1">Home</span>
            </div>
          </div>
          <div className="menu-item">
            <a className="menu-link active" href="../../demo44/dist/index.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">Default</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo44/dist/dashboards/ecommerce.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
              <span className="menu-title">eCommerce</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
