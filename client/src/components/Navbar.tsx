import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import auth from "../utils/auth";

const Navbar = () => {
  const currentPage = useLocation().pathname;
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div className="display-flex justify-space-between align-center py-2 px-5 mint-green">
      <h1>Macro-Munch</h1>
      <div>
        {!loginCheck ? (
          <>
            <button className="btn" type="button" style={{marginRight: '10px'}}>
              <Link to="/signup">Signup</Link>
            </button>
            <button className="btn" type="button">
              <Link to="/login">Login</Link>
            </button>
            <a className="nav-item">
                <Link
                  id="nav-item"
                  to="/recipeFinder"
                  className={currentPage === '/recipeFinder' ? 'active' : 'nav-link'}>
                  Find Recipe
                </Link>
          </a>
          </>
        ) : (
          <button
            className="btn"
            type="button"
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
