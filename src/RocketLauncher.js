import React, { useState } from "react";

const RocketLauncher = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const playSound = () => {
    const audio = new Audio("/sounds/rocket-launch.mp3");
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  const handleLaunch = () => {
    setCountdown(3); // Start countdown from 3
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setIsLaunching(true);
      playSound(); // Play sound after user interaction
    }, 3000); // Launch after 3 seconds
  };

  return (
    <div className="rocket-launcher">
      {countdown > 0 && <div className="countdown">Countdown: {countdown}</div>}
      <div className={`rocket ${isLaunching ? "launch" : ""}`} onClick={handleLaunch}>
        🚀
      </div>
      <button className="launch-button" onClick={handleLaunch}>
        Launch Rocket
      </button>
    </div>
  );
};

export default RocketLauncher;