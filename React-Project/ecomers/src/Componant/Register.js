import "./Register.css";
function Registerpage() {
  return (
    <div>
      <form className="Rform">
        <h2 className="heading">Register</h2>
        <h4 className="lable">Name</h4>
        <input
          type="text"
          placeholder="Name"
          id="Name"
          name="Name"
          className="Rinput"
        ></input>

        <h4 className="lable">Number</h4>
        <input
          type="number"
          placeholder="Number"
          id="Number"
          name="Number"
          className="Rinput"
        ></input>
        <h4 className="lable">Email</h4>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="Rinput"
        ></input>

        <br />
        <h4 className="lable">Password</h4>
        <input
          type="password"
          placeholder="passward"
          id="passward"
          name="passward"
          className="Rinput"
        ></input>
        <br></br>
        <input
          type="submit"
          id="submit"
          name="submit"
          className="Rinput"
        ></input>
      </form>
    </div>
  );
}
export default Registerpage;
