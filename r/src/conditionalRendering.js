import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 2000);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to Dashboard</h1>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;