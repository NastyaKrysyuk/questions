import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, method, payload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.request({
          url,
          method,
          data: payload,
        });
        setData(response.data);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
