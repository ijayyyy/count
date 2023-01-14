import React, { useState } from "react";
import dell from "../images/dell.jpg";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home-container" style={{ background: `url(${dell})` }}>
      <nav className="active">
        <a href="/" className="main">
          Home
        </a>
      </nav>
      <ul className={`nav-list ${isOpen && "open"}`}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/throwError">ErrorBoundary</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div
        className={`hamburger ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="toggle"></div>
      </div>
    </div>
  );
}
export default Home;
