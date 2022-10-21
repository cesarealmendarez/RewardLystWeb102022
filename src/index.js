import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { NextUIProvider } from "@nextui-org/react";
import BusinessDashboard from './Stage1/BusinessDashboard';
import CustomerRewardAmendmentModal from "./Stage1/TestViews/CustomerRewardAmendmentModal";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NextUIProvider>
            <CustomerRewardAmendmentModal />
        </NextUIProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
