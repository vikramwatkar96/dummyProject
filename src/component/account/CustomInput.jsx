

import React from 'react';
import Form from 'react-bootstrap/Form';

function CustomInput ({ label, value, onChange, placeholder }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        // value={value}
        // onChange={(e) => onChange(e.target.value)}
        className='customInput_input'
        style={{borderRadius:'0px',padding:'15px',textAlign:'center',width:'516px'}}
      />
    </Form.Group>
  );
};

export default CustomInput;
