import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const posts = [
  { id: 1, title: '第一篇博客', summary: '这是第一篇博客摘要' },
  { id: 2, title: '第二篇博客', summary: '这是第二篇博客摘要' }
];

function Home() {
  return (
    <div className="p-8 grid gap-6">
      {posts.map(post => (
        <Card key={post.id} className="hover:shadow-lg transition">
          <CardContent>
            <Typography variant="h5" component="div">
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.summary}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;
