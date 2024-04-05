// Input.js
import React from 'react';

const Input = ({ id, name, type, placeholder, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </>
  );
};

export default Input;
