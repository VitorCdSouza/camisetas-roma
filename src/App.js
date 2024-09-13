import React from "react";
import background from "./assets/flanker-lee-naeD-4ShjG0-unsplash.jpg";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex h-screen">
      {/* bg at left */}
      <div
        className="basis-9/12 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>

      {/* login at right */}
      <div className="basis-3/12 flex items-center justify-center bg-white">
        <Login />
      </div>
    </div>
  );
}

export default App;
