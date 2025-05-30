import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="student-navbar">
      <div className="nav-logo">🎓 Student Tracker</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Enroll</a></li>
        <li><a href="#">Students</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div>
        <ul className="nav-links">
          <li><a href="#"><i className="fa-solid fa-user" style={{marginRight:'10px'}}></i>Login</a></li>
           <li><a href="#"><i className="fa-solid fa-users" style={{marginRight:'10px'}}></i>Ragister</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
