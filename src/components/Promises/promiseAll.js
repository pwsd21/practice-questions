// Handling Multiple Concurrent API Calls
const fetchData = async () => {
  try {
    // Concurrently fetch data from two different URLs
    const [res1, res2] = await Promise.all([fetch("url1"), fetch("url2")]);
    // Parse JSON responses
    const data1 = await res1.json();
    const data2 = await res2.json();
    // Return array of fetched data
    return [data1, data2];
  } catch (err) {
    // Log any errors that occur during fetching
    console.log(err);
    // Throw a new error to indicate failure
    throw new Error("Failed to fetch data");
  }
};

// Limit Retries of API Calls
const promiseRetry = (fetchFn, retries = 3, delay = 0) => {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      // Attempt to fetch data using fetchFn()
      fetchFn()
        .then(resolve)
        .catch((error) => {
          // Retry logic if an error occurs
          if (n === 0) {
            // Reject promise if retries are exhausted
            reject(error);
          } else {
            // Retry after a delay if retries are remaining
            setTimeout(() => {
              attempt(n - 1);
            }, delay);
          }
        });
    };
    // Start initial attempt
    attempt(retries);
  });
};

// Fetching Data in Chunks

const fetchPage = async (page) => {
  // Fetch data from API endpoint with specified page number
  const response = await fetch(`/api/items?page=${page}`);
  // Parse JSON response
  const data = await response.json();
  // Return fetched data
  return data;
};
const loadMoreItems = async () => {
  // Calculate next page number to fetch
  const newPage = currentPage + 1;
  // Fetch items from the next page
  const newItems = await fetchPage(newPage);
  // Append newly fetched items to existing items state
  setItems([...items, ...newItems]);
  // Update current page state to reflect the new page
  setCurrentPage(newPage);
};
