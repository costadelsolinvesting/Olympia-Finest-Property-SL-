import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
import { NewsPost } from '../../types';
import { PhotoIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

const AdminNewsEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { newsPosts, setNewsPosts } = useData();
  const isNew = id === undefined;

  const [post, setPost] = useState<Partial<NewsPost>>({
    title: { en: '', es: '' },
    category: { en: '', es: '' },
    excerpt: { en: '', es: '' },
    content: { en: '', es: '' },
    author: 'Admin',
    image: '',
  });

  useEffect(() => {
    if (!isNew && id) {
      const existingPost = newsPosts.find(p => p.id === id);
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id, isNew, newsPosts]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
        const [field, lang] = name.split('.');
        setPost(prev => ({
            ...prev,
            [field]: { ...(prev as any)[field], [lang]: value }
        }));
    } else {
        setPost(prev => ({ ...prev, [name]: value }));
    }
  };

  /**
   * Confirmed: This function correctly handles the replacement of a single featured image.
   * When a new file is selected, its simulated URL replaces the existing 'image' value in the state.
   */
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, you would upload the file to a server and get a URL back.
      // Here, we simulate this by creating a new random placeholder image URL.
      const newImage = `https://picsum.photos/seed/newpost-${Date.now()}/1000/600`;
      setPost(prev => ({ ...prev, image: newImage }));
    }
  };

  /**
   * Confirmed: This function correctly handles the removal of the single featured image.
   * It resets the 'image' value in the state to an empty string.
   */
  const handleImageRemove = () => {
    setPost(prev => ({ ...prev, image: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      const newPost: NewsPost = {
        ...post,
        id: `post-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        image: post.image || 'https://picsum.photos/seed/newpost/1000/600',
      } as NewsPost;
      setNewsPosts(prev => [...prev, newPost]);
    } else {
      setNewsPosts(prev => prev.map(p => p.id === id ? post as NewsPost : p));
    }
    navigate('/admin/news');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{isNew ? 'Add New Post' : 'Edit Post'}</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title (EN)</label>
                <input name="title.en" value={post.title?.en} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Title (ES)</label>
                <input name="title.es" value={post.title?.es} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md" required />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Category (EN)</label>
                <input name="category.en" value={post.category?.en} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Category (ES)</label>
                <input name="category.es" value={post.category?.es} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md" />
            </div>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Excerpt (EN)</label>
            <textarea name="excerpt.en" value={post.excerpt?.en} onChange={handleChange} rows={3} className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Excerpt (ES)</label>
            <textarea name="excerpt.es" value={post.excerpt?.es} onChange={handleChange} rows={3} className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Content (EN)</label>
            <textarea name="content.en" value={post.content?.en} onChange={handleChange} rows={8} className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Content (ES)</label>
            <textarea name="content.es" value={post.content?.es} onChange={handleChange} rows={8} className="mt-1 block w-full border-gray-300 rounded-md" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Featured Image</label>
            <div className="mt-2">
                {post.image ? (
                    <div className="relative group w-full h-48">
                        <img src={post.image} alt="Featured preview" className="h-full w-full object-cover rounded-md border" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center space-x-4">
                            <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer p-2 bg-white/80 rounded-full text-blue-600 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <PencilSquareIcon className="w-7 h-7" />
                                <span className="text-xs font-semibold">Change</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileSelect} accept="image/*" />
                            </label>
                            <button
                                type="button"
                                onClick={handleImageRemove}
                                className="flex flex-col items-center p-2 bg-white/80 rounded-full text-red-600 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <TrashIcon className="w-7 h-7" />
                                <span className="text-xs font-semibold">Remove</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600 justify-center">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileSelect} accept="image/*" />
                                </label>
                            </div>
                            <p className="text-xs text-gray-500">PNG or JPG</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button type="button" onClick={() => navigate('/admin/news')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Save Post</button>
        </div>
      </form>
    </div>
  );
};

export default AdminNewsEditPage;
