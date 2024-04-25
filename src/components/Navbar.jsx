import { Link } from "react-router-dom";

const Navbar = () => {
  const userEmail = localStorage.getItem("email");
  console.log("userEmail",userEmail)
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <Link to='/' className="btn btn-ghost text-xl">ACM</Link>
      </div>
      <div className="navbar-end gap-2">
        {
          userEmail? <button className="btn">LogOut</button>:<Link to='/login' className="btn">Login</Link>
        }
        
        <a className="btn">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
