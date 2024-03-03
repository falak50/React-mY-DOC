import { useState, useEffect } from 'react';

function useDataFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code here, if needed
    };
  }, [url]); // Dependency array to trigger effect on URL change

  return { data, isLoading, error };
}

export default useDataFetch;
