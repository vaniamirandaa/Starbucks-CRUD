import { useState, useEffect } from "react";

export default function useFetch(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchingData = () => {
    fetch('http://localhost:3000/' + path, {
      headers: {
        'access_token': localStorage.getItem("access_token"),
      }
    })
      .then((response) => response.json())
      .then((dt) => setData(dt))
      .catch((error) => console.error('Error fetching:', error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchingData();
  }, [path]);

  return {
    data,
    loading,
    fetchingData
  };
}
