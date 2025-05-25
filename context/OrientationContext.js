// context/OrientationContext.js
import React, { createContext, useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const OrientationContext = createContext();

export const OrientationProvider = ({ children }) => {
  const [orientation, setOrientation] = useState("PORTRAIT");

  const lockOrientation = async (mode) => {
    if (mode === "LANDSCAPE") {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      setOrientation("LANDSCAPE");
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      setOrientation("PORTRAIT");
    }
  };

  useEffect(() => {
    // Lock to portrait on start
    lockOrientation("PORTRAIT");
  }, []);

  return (
    <OrientationContext.Provider value={{ orientation, lockOrientation }}>
      {children}
    </OrientationContext.Provider>
  );
};
