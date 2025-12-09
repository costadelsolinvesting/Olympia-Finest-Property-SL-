
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { newsPosts } = useData();
  const { T } = useTranslations();
  const post = newsPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/news" className="text-red-600 hover:underline mt-4 inline-block">Back to News</Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article>
          <header className="mb-8 text-center">
            <p className="text-base text-red-600 font-semibold tracking-wide uppercase">{T(post.category)}</p>
            <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              {T(post.title)}
            </h1>
            <p className="mt-4 text-sm text-gray-500">
              By {post.author} on <time dateTime={post.date}>{post.date}</time>
            </p>
          </header>
          
          <img src={post.image} alt={T(post.title)} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8" />
          
          <div className="prose prose-lg prose-red mx-auto text-gray-700">
            <p className="lead">{T(post.excerpt)}</p>
            <p>{T(post.content)}</p>
            {/* Add more paragraphs or rich text rendering here */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsDetailPage;
