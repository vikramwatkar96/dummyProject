
import React, { useState } from 'react';
import CustomInput from '../component/account/CustomInput';
import Container from 'react-bootstrap/Container';
import CustomButton from '../component/account/CustomButton';


function Password() {


  return (
    <Container>
      <h2 style={{ marginLeft: '60px' }}>FORGET YOUR PASSWORD</h2>
      <CustomInput
        // label="Name:"
        // value={name}
        // onChange={handleNameChange}
        placeholder="Enter Your Email"
      />

      <CustomButton title='submit' />
    </Container>
  );
};

export default Password;
