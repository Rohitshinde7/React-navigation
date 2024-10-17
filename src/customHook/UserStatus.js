import React, { useEffect, useState } from "react";

function UserStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function SetOnline() {
      setIsOnline(true);
    }

    function SetOffline() {
      setIsOnline(false);
    }
    
    window.addEventListener("online", SetOnline);
    window.addEventListener("offline", SetOffline);

    return () => {
      window.removeEventListener("online", SetOnline);
      window.removeEventListener("offline", SetOffline);
    };
  }, []);

  return isOnline;
}

export default UserStatus;
