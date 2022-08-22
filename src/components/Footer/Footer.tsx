import React from "react";
import "@/components/Footer/Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div>&copy; 2022 Kitty</div>
            <a href="terms" className="footer-menu-item">Terms</a>
            <a href="privacy" className="footer-menu-item">Privacy</a>
            <a href="security" className="footer-menu-item">Security</a>
            <a href="api" className="footer-menu-item">API</a>
            <a href="about" className="footer-menu-item">About</a>
        </div>
    )
}