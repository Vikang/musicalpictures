import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Test() {
  return (
    <>
      <MDBRow>
        <MDBCol md='4' className='col-example'>
          md="4"
        </MDBCol>
        <MDBCol md='4' className='col-example'>
          md="4"
        </MDBCol>
        <MDBCol md='4' className='col-example'>
          md="4"
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Test