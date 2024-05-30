// Handling Multiple Concurrent API Calls
const fetchData = async () => {
  try {
    const [res1, res2] = await Promise.all([fetch(""), fetch("")]);
    const data1 = await res1.json();
    const data2 = await res2.json();
    return [data1, data2];
  } catch (err) {
    console.log(err);
  }
};

// Limit Retries of API Calls
const PromiseRetry = (value, retires = 3, delay=0) => {
    return new Promise(resolve, reject) {
        const attempt = (n) => {
            fetchFn().then((resolve)).catch((error) => {
                if(n === 0) {
                    reject(error)
                } else {
                    setTimeout(() => {
                        attempt(n-1)
                    }, delay)
                }
            })
        }
        attempt(retries)
        
    }
}

// Fetching Data in Chunks
const fetchPage = async (page) => {
    const response = await fetch(`/api/items?page=${page}`);
    const data = await response.json();
    return data;
  };
  
  const loadMoreItems = async () => {
    const newPage = currentPage + 1;
    const newItems = await fetchPage(newPage);
    setItems([...items, ...newItems]);
    setCurrentPage(newPage);
  };

  

