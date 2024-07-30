import logo from "../ascets/logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaAddressCard } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar({ Cart }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <img
          src={logo}
          width={30}
          height={30}
          className="d-inline-block aline-top"
          alt="/"
        ></img>
        <Link className="navbar-brand" to={"/"}>
          V`Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <input
              type="search"
              placeholder="Serch for product "
              className="serch"
            ></input>
            <FaSearch />
            <button type="button" class="btn btn-primary">
              Profile
              <FaAddressCard />
              <span class="badge badge-light">{}</span>
              <span class="sr-only">unread messages</span>
            </button>
            <Link to="/Cart" style={{ marginLeft: 350 }} className="cart">
              <i class="fa-solid fa-cart-shopping"></i>{" "}
            </Link>
            <Link to="/login">
              <button className="btn btn-primary">LogIn</button>
            </Link>

            <Link to="/register">
              <button className="btn btn-success ">Register</button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
