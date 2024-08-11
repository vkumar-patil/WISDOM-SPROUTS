import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUserdata(data);
        
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div style={{ width: "300px", backgroundColor: "gray" }}>
        <input
          type="text"
          placeholder="Serch"
          style={{ padding: 10, margin: 10, borderRadius: "10px" }}
        />
        {userdata.map((user) => (
          <>
            <div key={user.id}>
              <Link to={`/fechUserdetail/${user.id}`}>
                {" "}
                <li style={{ color: "white" }}>{user.name}</li>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Userlist;
