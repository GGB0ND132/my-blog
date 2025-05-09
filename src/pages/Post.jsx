// src/page/Post.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadPosts } from '../utils/loadPosts';
import ReactMarkdown from 'react-markdown';

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    loadPosts().then(posts => {
      const found = posts.find(p => p.slug === slug);
      setPost(found);
    });
  }, [slug]);

  if (!post) return <div className="p-4">加载中...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
    </div>
  );
}

export default Post;
