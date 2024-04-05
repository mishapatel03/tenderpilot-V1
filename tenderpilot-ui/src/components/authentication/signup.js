import React, { useState } from 'react';
import Input from '../../shared/input';

const inputFields = [
    { id: 'organization-name', name: 'organization', type: 'text', placeholder: 'Organization Name', required: true },
    { id: 'email-address', name: 'email', type: 'email', placeholder: 'Email address', required: true },
    { id: 'first-name', name: 'fName', type: 'text', placeholder: 'First Name', required: true },
    { id: 'last-name', name: 'lName', type: 'text', placeholder: 'Last Name', required: true },
    { id: 'password', name: 'password', type: 'password', placeholder: 'Password', required: true },
    { id: 'cnfPassword', name: 'cnfPassword', type: 'password', placeholder: 'Confirm Password', required: true }
];

const SignUp = () => {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cnfPassword: '',
        organization: '',
        fName: '',
        lName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    };

    const handleSubmit = (e, userType) => {
        e.preventDefault();

        if (Object.values(formData).some(value => value === '')) {
            setError("All fields are required");
        }

        if (formData.password !== formData.cnfPassword) {
            setError('Password and Confirm password does not match');
        }
        console.log(formData, userType);

        // Make API call to login endpoint
        // Example:
        // authService.login(email, password)
        //   .then(response => {
        //     // Handle successful login
        //   })
        //   .catch(error => {
        //     // Handle login error
        //   });
    };

    return (
        <form className="mt-8 space-y-6">
            {inputFields.map((field) => (
                <Input
                    key={field.id}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                />
            ))}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            <div>
                <button
                    onClick={(e) => handleSubmit(e, 1)}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                    I'm a Buyer
                </button>
                <p className='mt-4'>OR</p>
                <button
                    onClick={(e) => handleSubmit(e, 2)}
                    className="group relative w-full flex justify-center py-2 mt-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                    I'm a Supplier
                </button>
            </div>
        </form>
    )
}

export default SignUp;