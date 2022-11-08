import React from "react";
import dell from "../images/dell.jpg";

function Home() {
  return (
    <div className="home-container" style={{ background: `url(${dell})` }}>
      <nav className="active">
        <a href="/" className="main">
          Home
        </a>
      </nav>
      <ul className="nav-list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/errorboundary">ErrorBoundary</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Home;
