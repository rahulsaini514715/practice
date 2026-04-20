import { useEffect, useState } from 'react';

function DataLoader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>🔄 Loading data...</p>;

  return (
    <div>
      <h3>📄 Posts:</h3>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
export default DataLoader;