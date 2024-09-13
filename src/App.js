import React from "react";
import background from "./assets/background.jpg";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex h-screen">
      {/* bg at left */}
      <div
        className="sm:basis-0 lg:basis-[68%] bg-cover transform scale-x-[-1]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: `-10% 80%`,
        }}
      >
      </div>

      {/* login at right */}
      <div className="w-full sm:basis-full lg:basis-[32%] flex items-center justify-center bg-white">
        <Login />
      </div>
    </div>
  );
}

export default App;
