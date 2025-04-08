import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Format: YYYYMMDD_HHmmss.mmm_UTC+05
      const pad = (n, width = 2) => String(n).padStart(width, "0");

      const year = now.getFullYear();
      const month = pad(now.getMonth() + 1);
      const date = pad(now.getDate());
      const hours = pad(now.getHours());
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());
      const millis = pad(now.getMilliseconds(), 3);

      const timezoneOffset = -now.getTimezoneOffset(); // in minutes
      const offsetHours = Math.floor(timezoneOffset / 60);
      const formattedOffset = `UTC${offsetHours >= 0 ? "+" : ""}${pad(
        offsetHours
      )}`;

      const formattedTime = `${year}${month}${date}_${hours}${minutes}${seconds}.${millis}_${formattedOffset}`;

      setTime(formattedTime);
    }, 100); // Update every 100ms for millisecond precision

    return () => clearInterval(interval);
  }, []);

  return <div className="text-[#94928D]">{time}</div>;
}

export default Clock;
