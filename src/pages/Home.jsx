// src/page/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../utils/loadPosts';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts().then(setPosts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">博客文章</h1>
      {posts.map(post => (
        <Link key={post.slug} to={`/post/${post.slug}`} className="block mb-4 p-4 border rounded hover:bg-gray-100">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.date}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
