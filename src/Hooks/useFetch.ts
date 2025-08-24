import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrl = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Something Went Wrong");
        const json = await res.json();
        setData(json.products);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, []);

  return { data, loading, error };
};

export default useFetch;
