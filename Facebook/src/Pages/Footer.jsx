import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="languages">
                English (UK) · മലയാളം · தமிழ் · ಕನ್ನಡ · हिन्दी · اردو · বাংলা · తెలుగు · Español · Português (Brasil) · Français (France)
                <button className="add_lang">+</button>
            </div>
            <div className="footer_links">
                <a href="/signup">Sign Up</a>
                <a href="/">Log in</a>
                <a href="#">Messenger</a>
                <a href="#">Facebook Lite</a>
                <a href="#">Video</a>
                <a href="#">Meta Pay</a>
                <a href="#">Meta Store</a>
                <a href="#">Meta Quest</a>
                <a href="#">Ray-Ban Meta</a>
                <a href="#">Meta AI</a>
                <a href="#">Instagram</a>
                <a href="#">Threads</a>
                <a href="#">Contact uploading and non-users</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookies</a>
                <a href="#">AdChoices</a>
                <a href="#">Terms</a>
                <a href="#">Help</a>
            </div>
            <div className="copyright">
                Meta © 2025
            </div>
        </footer>
    )
}

export default Footer