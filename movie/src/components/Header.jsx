import React from "react";
import "../styles.css";

export default function Header() {
    return (
        <div className="header">
            <img className='logo' src='/logo.png'  alt='Vite logo'/>
            <h1>Welcome to the Movie App</h1>
        </div>
    );
}