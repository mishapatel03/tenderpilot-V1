import React, { useState } from 'react';
import SignUp from './signup';
import Input from '../../shared/input';
import { useNavigate } from 'react-router-dom';
import { BuyerDashboardRoute } from '../../utils/routes';

const inputFields = [
  { id: 'email-address', name: 'email', type: 'email', placeholder: 'Email address', required: true },
  { id: 'password', name: 'password', type: 'password', placeholder: 'Password', required: true },
];

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleSubmit = (e, userType) => {
    e.preventDefault();

    if (Object.values(formData).some(value => value === '')) {
      setError("All fields are required");
      return;
    }

    console.log(formData, userType);

    if (userType === 1) {
      navigate(BuyerDashboardRoute);
    }
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Tender Pilot</h2>
        </div>
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => handleTabClick(1)}
            className={`px-4 py-2 w-1/2 text-center focus:outline-none ${activeTab === 1 ? 'border-b-2 border-cyan-500 text-cyan-600' : 'text-gray-500'
              }`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`px-4 py-2 w-1/2 text-center focus:outline-none ${activeTab === 2 ? 'border-b-2 border-cyan-500 text-cyan-600' : 'text-gray-500'
              }`}
          >
            Sign Up
          </button>
        </div>
        {
          activeTab === 1 ?
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    type="button"
                    className="font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={(e) => handleSubmit(e, 1)}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Sign in as Buyer
                </button>
                <p className='mt-4'>OR</p>
                <button
                  onClick={(e) => handleSubmit(e, 2)}
                  className="group relative w-full flex justify-center py-2 mt-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Sign in as Supplier
                </button>
              </div>
            </form> :

            <SignUp />
        }

      </div>
    </div>
  );
};

export default Login;
