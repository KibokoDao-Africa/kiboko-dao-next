// app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => (
  <section data-bs-version="5.1" className="menu menu01 scalem5 cid-ut4ZedzX86" id="menu-1-ut4ZedzX86">
    <nav className="navbar navbar-dropdown navbar-expand-lg">
      <div className="menu_box container">
        <div className="navbar-brand d-flex">
          <span className="navbar-logo">
            <a href="#">
              <img src="https://r.mobirisesite.com/862220/assets/images/photo-1499750310107-5fef28a66-h_m31vw35a.jpg" alt="KibokoDAO Logo" />
            </a>
          </span>
          <span className="navbar-caption-wrap">
            <a className="navbar-caption display-7" href="#">KibokoDAO</a>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span><span></span><span></span><span></span>
            </div>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li className="nav-item"><Link href="#home" className="nav-link link display-4">Home</Link></li>
            <li className="nav-item"><Link href="#governance" className="nav-link link display-4">Governance</Link></li>
            <li className="nav-item"><Link href="#proposals" className="nav-link link display-4">Proposals</Link></li>
          </ul>
          <div className="mbr-section-btn-main" role="tablist">
            <Link href="#join" className="btn btn-primary display-4" id="join-now-btn">Join Now</Link>
          </div>
        </div>
      </div>
    </nav>
  </section>
);

export default Navbar;
  