import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", summary: "This is the summary for Item 1" },
  { id: 2, name: "Item 2", summary: "This is the summary for Item 2" },
  // Add more items as needed
];

function Home() {
  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/summary/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Summary() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error("Invalid item id");
  }

  const item = items.find((i) => i.id === parseInt(id));
  return (
    <div>
      <h1>{item?.name}</h1>
      <p>{item?.summary}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
}
