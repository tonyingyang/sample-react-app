import SideNavigationLogo from "./SideNavigationLogo";

const SideNavigationItem = () => {
  return (
    <ul className="side-navbar-nav">
      <SideNavigationLogo />
      <li className="side-nav-item">
        <a href="/" className="side-nav-link">
          <i className='bx bxs-home'></i>
          <span className="link-text">Dashboard</span>
        </a>
      </li>
      <li className="side-nav-item">
        <a href="/brands" className="side-nav-link">
          <i className='bx bxs-copyright'></i>
          <span className="link-text">Brands</span>
        </a>
      </li>
      <li className="side-nav-item">
        <a href="/stores" className="side-nav-link">
          <i className='bx bxs-store-alt'></i>
          <span className="link-text">Stores</span>
        </a>
      </li>
      <li className="side-nav-item">
        <a href="/promos" className="side-nav-link">
          <i className='bx bxs-discount'></i>
          <span className="link-text">Promos</span>
        </a>
      </li>
      <li className="side-nav-item">
        <a href="/logout" className="side-nav-link">
          <i className='bx bx-log-out'></i>
          <span className="link-text">Signout</span>
        </a>
      </li>
    </ul>
  )
}

export default SideNavigationItem;
