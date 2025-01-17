import {  useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(( ) => {
        const abortController = new AbortController();

            fetch(url, { signal: abortController.signal })
                .then((res) => {
                    //This For Endpoint Error
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setPending(false);
                    setData(data);
                })
                //This for Connection server Error
                .catch((error) => {
                    if (error.name === "AbortError") {
                        console.log("Fetch aborted due to component unmount or URL change");                    
                    }
                    else {
                        setPending(false);
                        setError(error.message);
                    }
                });

        return () => {
            abortController.abort()};
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;