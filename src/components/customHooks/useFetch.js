import { useState, useEffect } from "react";

// Custom hook `useFetch` to fetch data from a given URL with optional fetch options
const useFetch = (url, options = {}) => {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to manage the loading status
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during the fetch process
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the given URL
    const fetchData = async () => {
      // Set loading to true and reset error
      setLoading(true);
      setError(null);
      try {
        // Fetch data from the URL with provided options
        const response = await fetch(url, options);
        // If the response is not OK, throw an error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response as JSON
        const result = await response.json();
        // Set the fetched data to state
        setData(result);
      } catch (err) {
        // If an error occurs, set the error message to state
        setError(err.message);
      } finally {
        // Set loading to false once the fetch is complete
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [url, options]); // Re-run the effect if URL or options change

  // Return the fetched data, loading status, and any error
  return { data, loading, error };
};

export default useFetch;
