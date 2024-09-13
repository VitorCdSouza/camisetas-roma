import React from "react";
import background from "./assets/flanker-lee-naeD-4ShjG0-unsplash.jpg";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex h-screen">
      {/* bg at left */}
      <div
        className="sm:basis-0 lg:basis-9/12 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>

      {/* login at right */}
      <div className="w-full sm:basis-full lg:basis-3/12 flex items-center justify-center bg-white">
        <Login />
      </div>
    </div>
  );
}

export default App;
