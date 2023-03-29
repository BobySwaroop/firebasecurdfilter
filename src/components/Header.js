import React, {useEffect, useState } from "react";
import {Link , useLocation} from "react-router-dom";
import "./header.css";

const Header = () => {
    const [activeTab, setactiveTab] =useState("Home");
    const location = useLocation;
    useEffect(()=>{
        if(location.pathname === "/"){
            setactiveTab("Home")
        }
        else if (location.pathname==="/add"){
            setactiveTab("AddContact")
        }
        else if (location.pathname==="/about"){
            setactiveTab("About")
        }
    },[location])
  return (
    <div className="header">
        <p className="logo">Contact App</p>
        <div className="header-right">
            <Link to="/">
                <p className={`${activeTab === "Home"} ? "active" : ""}`} onClick={() => setactiveTab("Home")}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "AddContact"} ? "active" : ""}`} onClick={() => setactiveTab("AddContact")}>AddContact</p>
            </Link>
            <Link to="/about">
                <p className={`${activeTab === "About"} ? "active" : ""}`} onClick={() => setactiveTab("About")}>View</p>
            </Link>
             
        </div>
      
    </div>
  )
}

export default Header;
