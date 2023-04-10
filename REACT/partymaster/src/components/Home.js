import './Home.css';

import topBanner from './../assets/top-banner.png';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Home() {
    const [stack, setStack] = useState("");
    useEffect(() => {

    }, [stack])

    const changeDotnet = () => {
        setStack('dotnet')
    }
    const changeJava = () => {
        setStack('java')
    }
    return (
        <div>
            <img src={topBanner} className="banner-top" alt="logo" />
            <div className='top-header'>
                    <label>PARTY MASTER 1.0.0</label>
            </div>
            <nav>
                <ul>
                    <li className={stack == 'dotnet' ? 'tab active' : 'tab'} >
                        <Link to="/dotnet" onClick={changeDotnet} >Partmaster Api / Dotnet</Link>
                    </li>
                    <li className={stack == 'java' ? 'tab active' : 'tab '}>
                        <Link to="/java" onClick={changeJava}>Partmaster Api / Java</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>

    );
}

export default Home;

