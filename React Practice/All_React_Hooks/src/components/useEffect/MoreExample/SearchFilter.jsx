import { useState, useEffect } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const users = ['Rahul', 'Monika', 'Sagar', 'Rohan'];

  useEffect(() => {
    const result = users.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query]); // query change hone par filter chalega

  return (
    <div>
      <input
        placeholder="Search name"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filtered.map((name, i) => (
        <p key={i}>{name}</p>
      ))}
    </div>
  );
}

export default SearchFilter;