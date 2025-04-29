import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const posts = [
  { id: 1, title: '第一篇博客', content: '这里是第一篇博客的内容' },
  { id: 2, title: '第二篇博客', content: '这里是第二篇博客的内容' }
];

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <div>文章不存在</div>;

  return (
    <div className="p-8">
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" component="p">
        {post.content}
      </Typography>
    </div>
  );
}

export default Post;
