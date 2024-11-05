// Navbar.tsx
import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link href="/" className="navbar-brand">
        <img src="https://i.postimg.cc/gXSRXWD8/kibokodaologo.png" alt="KibokoDAO Logo" className="navbar-logo" />
        KibokoDAO
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="#home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="#governance" className="nav-link">Governance</Link>
          </li>
          <li className="nav-item">
            <Link href="#proposals" className="nav-link">Proposals</Link>
          </li>
        </ul>
        <div className="d-flex">
          <Link href="#join" className="btn btn-primary">Join Now</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
