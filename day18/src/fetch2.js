import { useEffect, useState } from 'react';

function fetch2() {
  const url = "https://heopoint.github.io/api/data/reviews.json";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => (res.json()))
            .then(data => (setData(data)));
    }, []);
    
    return data;
}

export default fetch2;
