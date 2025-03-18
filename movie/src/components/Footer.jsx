import React from "react";
import "../styles.css"

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">©Copyrights Manuela K. {year}, All rights reserved. </p>
        </footer>
    );
}