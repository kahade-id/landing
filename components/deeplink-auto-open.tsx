"use client";

import { useEffect, useState } from "react";

/** Coba buka `kahade://<appPath>` otomatis sekali saat mount. */
export default function DeeplinkAutoOpen({ appPath }: { appPath: string }) {
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    if (attempted) return;
    setAttempted(true);
    const t = setTimeout(() => {
      window.location.href = `kahade://${appPath}`;
    }, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
