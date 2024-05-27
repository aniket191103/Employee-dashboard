import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light font-weight-bold" href="#">Employee Activity Dashboard</a>
        <div className="d-flex flex-column">
          <span className="navbar-text text-light">
            Current Date: {currentDateTime.toLocaleDateString()}
          </span>
          <span className="navbar-text text-light">
            Current Time: {currentDateTime.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
