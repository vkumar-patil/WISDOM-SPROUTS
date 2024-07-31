import React, { useState, useEffect } from "react";
import profile from "./assets/profile.jpg";
import { useParams } from "react-router-dom";
import { userdata } from "./Userdata";
function Userdetail() {
  const { id } = useParams();
  //const [userdetail, setuserDetail] = useState([]);
  const [uses, setuses] = useState({});
  useEffect(() => {
    const Userdata = userdata.filter((use) => use.id == id);
    setuses(Userdata[0]);
  }, [id]);
  return (
    <div
      className="card userditail "
      style={{
        width: 540,
        marginRight: 100,
        position: "absolute",
        right: "160px",
        top: "100px",
        backgroundColor: "orange",
      }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={profile} alt="..." style={{ height: 150 ,borderRadius:"10px"}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{uses.name}</h5>
            <br />
            <p className="card-text">{uses.compony}</p>
            <br />
            <p className="card-text">
              <span className="text-muted">{uses.phone}</span>
              <br />
            </p>
            <p>
              <span className="text-muted">{uses.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetail;
