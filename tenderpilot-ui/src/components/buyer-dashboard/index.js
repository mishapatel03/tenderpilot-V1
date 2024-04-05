// ParentComponent.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BuyerContract, BuyerOrders, BuyerTenders } from '../../utils/routes';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/navbar';
// Import your tab components here


const BuyerDashboard = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [currOrg, setCurrOrg] = useState('')

    useEffect(() => {
        getCurrentOrganizationDetails();
    }, [])


    const tabs = [
        { id: 1, label: 'Tenders', path: BuyerTenders },
        { id: 2, label: 'Contracts', path: BuyerContract },
        { id: 3, label: 'Orders', path:  BuyerOrders }
    ];

    const getCurrentOrganizationDetails = () => {
        const result = "ABC Buyer";
        setCurrOrg(result)
    }

    const navigate = useNavigate();

    const handleTabClick = (tabId, path) => {
        setActiveTab(tabId);
        navigate(path);
    };
    return (
        <div>
            <Navbar title={'Tender-pilot'} notifications={4} username={"Misha Patel"} currOrg={currOrg} />
            <div className="contactNav">
                <div className="flex mt-2 justify-center border-b border-gray-200">
                    {tabs.map(tab => (
                        <Link
                            key={tab.id}
                            to={tab.path}
                            className='mr-2'
                            onClick={() => handleTabClick(tab.id, tab.path)}
                        >
                            <button
                                className={`px-2 py-1 focus:outline-none ${activeTab === tab.id ? 'border-b-2 border-cyan-500 text-cyan-600' : 'text-gray-500'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </Link>
                    ))}
                </div>

            </div>


            <Outlet />
        </div>
    );
};

export default BuyerDashboard;
