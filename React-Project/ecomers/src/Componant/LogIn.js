import stylesheet from "..Componant/Login.css"
import logo from "../ascets/logo.jpg";
function mainfom() {
  return (
    <>
      {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
          <img
            src={logo}
            width={30}
            height={30}
            classNameName="d-inline-block aline-top"
          ></img>
          <a classNameName="navbar-brand" href="#">
            Navbar
          </a>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarNav">
            <ul classNameName="navbar-nav">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Features
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="fomdiv">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default mainfom;
