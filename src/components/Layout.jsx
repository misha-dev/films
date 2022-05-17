import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import cl from "./Layout.module.css";

export default class Layout extends Component {
  render() {
    return (
      <>
        <header>
          <Link to={"/films"} className={cl.logo}>
            React movies
          </Link>
          <Link to={"/films"} className={cl.repository}>
            repo
          </Link>
        </header>
        <div className={cl.content}>
          <Outlet />
        </div>

        <footer>
          <div className={cl.footerWrapper}>
            <div className="copyright">
              &copy; {new Date().getFullYear()} Copyright Info
            </div>
            <div className={cl.repository}>repo</div>
          </div>
        </footer>
      </>
    );
  }
}
