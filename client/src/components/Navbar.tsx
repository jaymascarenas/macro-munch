import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import auth from "../utils/auth"

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
            <button
              className="btn"
              type="button"
              style={{ marginRight: "10px" }}
            >
              <Link to="/signup">Signup</Link>
            </button>
            <button
              className="btn"
              type="button"
              style={{ marginRight: "10px" }}
            >
              <Link to="/login">Login</Link>
            </button>
            <button className="btn" style={{ marginRight: "10px" }}>
              <Link
                id="nav-item"
                to="/recipeFinder"
                className={
                  currentPage === "/recipeFinder" ? "active" : "nav-link"
                }
              >
                Find Recipe
              </Link>
            </button>
            <button className="btn" style={{ marginRight: "10px" }}>
              <Link
                id="nav-item"
                to="/savedRecipe"
                className={
                  currentPage === "/savedRecipe" ? "active" : "nav-link"
                }
              >
                Saved Recipes
              </Link>
            </button>
          </>
        ) : (
          <div>
            <button
              className="btn"
              type="button"
              style={{ marginRight: "10px" }}
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </button>
            <button className="btn" style={{ marginRight: "10px" }}>
              <Link
                id="nav-item"
                to="/recipeFinder"
                className={
                  currentPage === "/recipeFinder" ? "active" : "nav-link"
                }
              >
                Find Recipe
              </Link>
            </button>
            <button className="btn" style={{ marginRight: "10px" }}>
              <Link
                id="nav-item"
                to="/savedRecipe"
                className={
                  currentPage === "/savedRecipe" ? "active" : "nav-link"
                }
              >
                Saved Recipes
              </Link>
            </button>
            <button
              className="btn"
              type="button"
              style={{ marginRight: "10px" }}
            >
              <Link to="/nutritionFacts">Nutrition Facts</Link>
            </button>
            <button
              className="btn"
              type="button"
              style={{ marginRight: "10px" }}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
