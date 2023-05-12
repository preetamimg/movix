import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import logo from './../../assets/img/moviewalas.svg';

const Header = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // jab bhi hum ek page s dusre page pr jayr toh hum top pr hi pauche uske liye
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [location])

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(min-width: 768px)")
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

    // mobile menu open
    const openMobileMenu = ()=> {
        setMobileMenu(true)
        setShowSearch(false)
    }

     // mobile menu open
    const openSearchMenu = ()=> {
        if(showSearch === true) {
            setShowSearch(false) 
        }
        else {
            setMobileMenu(false)
            setShowSearch(true)
        }
    }

    // search input
    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`)
            setTimeout(()=> {
                setShowSearch(false) 
            }, 1000)
        }
    }

    // menu handler
    const navigationHandler = (type)=> {
        if(type === "movie") {
            navigate('/movie')
        }else {
            navigate('/tv')
        }
        setShowSearch(false)
    }

    return (
        <header className="sticky-top">
            <div className={`container-fluid py-3 header position-relative ${mobileMenu ? 'showMenu' : ''} 
            ${showSearch ? 'showSearch' : ''}`}>
                <div className="container">
                    <nav className="row align-items-center">
                        <div className="col logoBox py-2">
                            <img src={logo} alt="logo" width={'180'} height={'21'} onClick={()=> navigate('/')} />
                        </div>
                        {
                            isNarrowScreen ? (
                                <div className="col-auto">
                                    <ul className="m-0 p-0 list-unstyled d-flex align-items-center">
                                        <li className="navLink text-white ps-4 text-uppercase fw-bold" 
                                        onClick={()=> navigationHandler('movie')}>Movies</li>
                                        <li className="navLink text-white ps-4 text-uppercase fw-bold"
                                        onClick={()=> navigationHandler('tv')}>TV Shows</li>
                                        <li className="navLink navIcon text-white ps-4 text-uppercase fw-bold">
                                            <HiOutlineSearch onClick={openSearchMenu}/>
                                            </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="col-auto">
                                <ul className="m-0 p-0 list-unstyled d-flex align-items-center">
                                    <li className="navLink navIcon text-white ps-3">
                                        <HiOutlineSearch onClick={openSearchMenu}/>
                                        </li>
                                    <li className="navLink navIcon text-white ps-3">
                                    {mobileMenu ?
                                    <VscChromeClose onClick={()=> {setMobileMenu(false)}}/> 
                                    : <SlMenu onClick={openMobileMenu}/>}
                                    </li>
                                </ul>
                                {mobileMenu ? (
                                    <ul className="position-absolute top-100 start-0 w-100 m-0 p-0 list-unstyled d-flex flex-column mobileMenu">
                                        <li className="navLink text-white ps-4 py-2"
                                        onClick={()=> navigationHandler('movie')}>Movies</li>
                                        <li className="navLink text-white ps-4 py-2 pb-3"
                                        onClick={()=> navigationHandler('tv')}>TV Shows</li>
                                    </ul>
                                ) : ''}
                            </div>
                            )
                        }
                        <div className="position-absolute top-100 start-0 w-100 searchBox text-white py-2 py-sm-2 bg-dark">
                            <div className="container position-relative">
                            <input type="search" 
                            className="form-control shadow-none border-0" 
                            placeholder="Search for movie and tv show..."
                            onChange={(e)=>setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose className="closeSearch position-absolute top-50 end-0" 
                            onClick={()=> {setShowSearch(false)}}/> 
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;