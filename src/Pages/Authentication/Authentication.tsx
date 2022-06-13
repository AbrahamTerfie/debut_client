import React, { useState } from 'react'
import { NavBarElement } from '../../Components/index';
import '../../Styles/Auth.css'
import AuthForms from './AuthForms';
export default function Authentication() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div  >
            {/* <NavBarElement /> */}
            <div 
            
            style={{
                paddingTop: '4em',
                border : '1px solid #e6e6e6',
            }}
            >

                this is auth page
                <AuthForms />
            </div>
        </div>
    )
}
