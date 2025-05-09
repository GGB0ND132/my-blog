// src/utils/loadPosts.js
import matter from 'gray-matter';

export async function loadPosts() {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw' });

  const loaded = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const raw = await resolver();
      const { data, content } = matter(raw);
      const slug = path.split('/').pop().replace('.md', '');
      return { slug, ...data, content };
    })
  );

  return loaded.sort((a, b) => new Date(b.date) - new Date(a.date));
}
