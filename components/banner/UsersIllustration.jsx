import React from "react";

function UsersIllustration() {
  return (
    <div className="flex items-center space-x-4 py-6">
      <div className="flex -space-x-2">
        <img
          src="/Ellipse2.png"
          alt="User 1"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
        <img
          src="/Ellipse3.png"
          alt="User 2"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
        <img
          src="/Ellipse5.png"
          alt="User 3"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
        <img
          src="/Ellipse4.png"
          alt="User 4"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
      </div>

      {/* Text */}
      <div className="text-white text-sm font-medium">
        517.69 million+
        <br />
        Spotiplay users worldwide
      </div>
    </div>
  );
}

export default UsersIllustration;
