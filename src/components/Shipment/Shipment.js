import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name,setName] = useState('');
   
    const[address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    // const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate();

    const handleName = (event)=>{
    setName(event.target.value);
    }
    const handleAddress = (event)=>{
        setAddress(event.target.value);
    }
   
   
    const handlePhone = (event)=>{
        setPhone(event.target.value);
    }
  

    const handleShipment = (event)=>{
       event.preventDefault();
       const shipping = { name,address,phone};
       console.log(shipping);
        
    }

    return (
        <div className="xl:mx-auto xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 p-4">
              <form onSubmit={handleShipment}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                 <h1 className='text-3xl font-semibold border-4 border-b-blue-700 mx-auto p-2 mb-6'>Shipping Information</h1>
                </div>

                
                <div className="mb-6">
                  <input
                  onChange={handleName}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name='name'
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                  value={user?.email}
                  readOnly
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    
                    placeholder="Email address"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                  onChange={handleAddress}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name='address'
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                  onChange={handlePhone}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name='phone'
                    placeholder="Phone Number"
                    required
                  />
                </div>

                

                <div className="text-center lg:text-left">
                    <p className='text-red-500'> {error? error: ''}</p>
                    <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
               
              </span>
              Add Shipping
            </button>
                  
                 
                </div>
              </form>
            </div>
    );
};

export default Shipment;