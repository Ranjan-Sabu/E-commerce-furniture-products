import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
               Wood Space
              </h6>
              <p>
                <strong>Wood Space</strong> produces high quality for both indoor and outdoor use.Supplying residential and contract market icluding restaurants,lexuary hotels and cruise ships .The products include sofa,chair,sofa chair,bed,table etc.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Furniture
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  SofasSeating
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mattresses
                </a>
              </p>
              
            </MDBCol>

            

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary'  className='me-3' />
               woodspace@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' className='me-3' />Phone: + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary'  className='me-3' />Mob:+91 9544 581 402
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' >
         Woodspace.com
        </a>
      </div>
    </MDBFooter>
  );
}