import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // stop fetch when component unmount
  const abortController = new AbortController();

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, { signal: abortController.signal }).then((response) => {
      if (!response.ok) {
        throw Error('Could not fetch the data for that resource!');
      }
      return response.json();
    }).then((responseData) => {
      setData(responseData);
      setIsPending(false);
      setError(null);
    }).catch((err) => { // catch any kind of network error
      if (err.name === 'AbortError') {
        console.log('fetch aborted!');
      } else {
        setIsPending(false);
        setError(err.message);
      }
    });
    return () => abortController.abort();
  }, [url]);

  // stop the fetch when component unmount
  return { error, isPending, data };
};

export default useFetch;
