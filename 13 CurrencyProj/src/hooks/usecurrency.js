import { useEffect, useState } from "react";

function useCurrInfo(curr) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${curr}.json`)
      .then((res) => res.json()) // ✅ Correct method here
      .then((res) => {
        setData(res[curr]);
      })
      .catch((err) => {
        console.error("Failed to fetch currency info:", err);
        setData({});
      });
  }, [curr]);

  return data;
}

export default useCurrInfo;
