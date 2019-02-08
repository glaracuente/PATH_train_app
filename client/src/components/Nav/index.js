import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Catch Next Train
      </a>
      <a className="navbar-brand" href="/schedule">
        Path Schedule
      </a>
      <a className="navbar-brand" href="/">
        Map and Fare Info
      </a>
      <a className="navbar-brand" href="/">
        Alerts
      </a>
    </nav>
  );
}

export default Nav;
