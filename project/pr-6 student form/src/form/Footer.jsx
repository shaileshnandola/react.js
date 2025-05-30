import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="student-footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Student Services</h3>
                        <ul>
                            <li><a href="#">Admissions</a></li>
                            <li><a href="#">Course List</a></li>
                            <li><a href="#">Exam Schedule</a></li>
                            <li><a href="#">Results</a></li>
                            <li><a href="#">Certifications</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Student Enrollment Tracker | Designed by <strong>Shailesh</strong></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer


