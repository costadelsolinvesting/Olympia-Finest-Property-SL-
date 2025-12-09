
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';

const NewsPage: React.FC = () => {
  const { newsPosts } = useData();
  const { t, T } = useTranslations();

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{t('news')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('newsSubtitle', 'Latest news, market insights, and guides for the Costa del Sol.')}</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <Link to={`/news/${post.id}`}>
                <img src={post.image} alt={T(post.title)} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity" />
                <div className="p-6">
                  <p className="text-sm text-gray-500">{T(post.category)} - {post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">{T(post.title)}</h2>
                  <p className="mt-3 text-gray-600">{T(post.excerpt)}</p>
                  <div className="mt-4 text-red-600 font-semibold group-hover:underline">
                    {t('readMore')} &rarr;
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
