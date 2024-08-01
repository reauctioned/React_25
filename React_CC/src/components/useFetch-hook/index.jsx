import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);

      const result = await res.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (e) {
      setError(`${e}, Error Occured`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
}
