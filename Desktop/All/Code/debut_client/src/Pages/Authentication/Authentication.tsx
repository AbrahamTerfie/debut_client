import React, { useState } from 'react'
import { NavBarElement } from '../../Components/index';
import '../../Styles/Auth.css'
import classnames from 'classnames'
export default function Authentication() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div  >
            <NavBarElement />
        </div>
    )
}
