import React, { useState, useEffect } from "react";
import './style.scss'

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelctedTab] = useState(0);
    const [left, setLeft] = useState(0);
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);



    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(min-width: 576px)")
        setIsNarrowScreen(mediaWatcher.matches);
    
        //watch for updates
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    
        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }
    }, [])

    const activeTab = (tab, index)=> {
        if (isNarrowScreen) {
            setLeft(index * 100)
        } else {
            setLeft(index * 80)
        }
        setTimeout(() => {
            setSelctedTab(index)
        }, 200);
        onTabChange(tab, index)
    }
    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index)=> (
                    <span key={index} 
                    className={`tabItem ${selectedTab === index ? 'active' : ''}`}
                    onClick={()=> activeTab(tab, index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{left}}/>
            </div>
        </div>
    );
};

export default SwitchTabs;
