import { useState, useEffect } from "react";


export function useOnline() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("online", () => setOnline(true), false);
      window.addEventListener("offline", () => setOnline(false), false);
    } else {
      document.body.ononline = () => setOnline(true);
      document.body.onoffline = () => setOnline(false);
    }
  }, []);

  return online;
};
