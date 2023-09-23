import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Userdata } from "./Userdata";

function AdminInfo() {
  
  const [user] = useState(Userdata);


  const navigate = useNavigate();

  const handleDetails = (userid) => {
    navigate(`/userdetails/${userid}`);
  };
  
  console.log(user);

  return (
    <div >
     
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {user.map((users) => (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>
                <h6 className="card-title">{users.name}</h6>
              </td>
              <td>
                <img
                  src={users.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "3rem", width: "3rem" }}
                />
              </td>
              <td>
                <p className="card-text">{users.email}</p>
              </td>
              <td>
                <button onClick={() => handleDetails(users.id)} style={{borderRadius:'5px',backgroundColor:'lightgreen'}}>Details</button>
             
              </td>
             
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default AdminInfo;