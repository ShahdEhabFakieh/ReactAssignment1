import React, { useState } from 'react';

function InputField({ label, type, hint }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label}>
        {inputValue && (
          <span>{hint}</span>
        )}
      </label>
      <input className='form-control mb-2 w-50 m-auto shadow focus-none' type={type} placeholder={inputValue ? '' : hint} value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-center text-uppercase pt-4 mt-4 fw-bold " style={{ color: "#2e3e50" }}>contact section</h1>
      <div className="styling d-flex justify-content-center align-items-center pb-4 mb-4">
        <hr className="hr-styling text-center" style={{ color: "#2e3e50" }} />
        <i className="fa-solid fa-star me-4 ms-4" style={{ color: "#2e3e50" }}></i>
        <hr className="hr-styling text-center" />
      </div>


      <div className="container">
        <form onSubmit={handleSubmit}>

          <InputField label="name" type="text" hint="userName" />
          <InputField label="age" type="number" hint="userAge" />
          <InputField label="email" type="email" hint="userEmail" />
          <InputField label="password" type="password" hint="userPassword" />

          <button type="submit" className='btn bg-home text-white mt-2 m-auto'>Send Message</button>
        </form>
      </div>
    </>
  );
}