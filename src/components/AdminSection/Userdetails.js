import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../Context';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

function Userdetails() {
  const { id } = useParams();
  const { userdata } = useContext(myContext);

  if (!Array.isArray(userdata)) {
    return <h1>Invalid data format: Users is not an array!</h1>;
  }

  const userId = parseInt(id);
  if (isNaN(userId)) {
    return <h1>Invalid ID: ID is not a valid integer!</h1>;
  }

  const viewPerson = userdata.find((user) => user.id === userId);

  if (!viewPerson) {
    return <h1>User not Found!</h1>;
  } else {
    return (
      <div className="gradient-custom-2" style={{ backgroundColor: '#DBAE58' }}>
        <MDBContainer className="py-5 h-100">
          {viewPerson && (
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="9" xl="7">
                <MDBCard>
                  <div
                    className="rounded-top text-white d-flex flex-row"
                    style={{ backgroundColor: 'brown', height: '200px' }}
                  >
                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                      <MDBCardImage src={viewPerson.image} alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                     
                    </div>
                    <div className="ms-3" style={{ marginTop: '130px' }}>
                      <MDBTypography tag="h5">{viewPerson.name}</MDBTypography>
                      <MDBCardText>{viewPerson.city}</MDBCardText>
                    </div>
                  </div>
                  <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="d-flex justify-content-center text-center py-1">
                      <div>
                        <MDBCardText className="mb-1 h5">{viewPerson.email}</MDBCardText>
                       
                      </div>
                    </div>
                  </div>
                  <MDBCardBody className="text-black p-4 d-flex justify-content-center "style={{backgroundColor:"#DBAE58"}}>
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1">Product Details</p>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                        <MDBCardText className="font-italic mb-1">{viewPerson.product.name}</MDBCardText>
                        <MDBCardText className="font-italic mb-0">{viewPerson.product.category}</MDBCardText>
                        <MDBCardText className="font-italic mb-1">Price: {viewPerson.product.price}</MDBCardText>
                        <MDBCardImage src={viewPerson.product.image} alt="Product" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '80px', zIndex: '1' }} />
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default Userdetails;
