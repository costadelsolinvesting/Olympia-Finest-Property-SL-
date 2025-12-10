import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
import { Property } from '../../types';
import { PhotoIcon, XCircleIcon } from '@heroicons/react/24/solid';

const AdminPropertyEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { properties, setProperties } = useData();
  const isNew = id === undefined;

  const [property, setProperty] = useState<Partial<Property>>({
    title: { en: '', es: '' },
    shortDescription: { en: '', es: '' },
    fullDescription: { en: '', es: '' },
    location: {en: '', es: ''},
    category: 'villas',
    subcategory: {en: '', es: ''},
    featured: false,
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    plot: 0,
    images: [],
  });
  
  const [isDragging, setIsDragging] = useState(false);
  const [draggedImageIndex, setDraggedImageIndex] = useState<number | null>(null);


  useEffect(() => {
    if (!isNew && id) {
      const existingProperty = properties.find(p => p.id === id);
      if (existingProperty) {
        setProperty(existingProperty);
      }
    }
  }, [id, isNew, properties]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
        const [field, lang] = name.split('.');
        setProperty(prev => ({
            ...prev,
            [field]: { ...(prev as any)[field], [lang]: value }
        }));
    } else {
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : type === 'number' ? Number(value) : value;
        setProperty(prev => ({ ...prev, [name]: val }));
    }
  };

  const handleImageRemove = (indexToRemove: number) => {
    setProperty(prev => ({
        ...prev,
        images: prev.images?.filter((_, index) => index !== indexToRemove)
    }));
  };

  const processFiles = useCallback((files: FileList) => {
    const newImageUrls = Array.from(files).map((file, index) => {
        // In a real app, you'd upload the file and get a URL.
        // Here, we simulate this by creating a placeholder URL.
        return `https://picsum.photos/seed/upload-${Date.now()}-${index}/1200/800`;
    });
    
    setProperty(prev => ({
        ...prev,
        images: [...(prev.images || []), ...newImageUrls]
    }));
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, [processFiles]);
const processFiles = useCallback((files: FileList) => {
    const newImageUrls = Array.from(files).map((file) => {
        const safeFileName = file.name.replace(/[^a-zA-Z0-9-.]/g, '_');
        return `/images/${safeFileName}`;
    });
    
    setProperty(prev => ({
        ...prev,
        images: [...(prev.images || []), ...newImageUrls]
    }));
  }, []);
  }, []);
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
        processFiles(e.target.files);
    }
  };

  const handleDragStart = (index: number) => {
    setDraggedImageIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDropReorder = (dropIndex: number) => {
    if (draggedImageIndex === null || draggedImageIndex === dropIndex) return;

    const newImages = [...(property.images || [])];
    const draggedItem = newImages.splice(draggedImageIndex, 1)[0];
    newImages.splice(dropIndex, 0, draggedItem);

    setProperty(prev => ({ ...prev, images: newImages }));
  };
  
  const handleDragEnd = () => {
    setDraggedImageIndex(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNew) {
      const newProperty: Property = {
        ...property,
        id: `prop-${Date.now()}`,
        ref: `OFP-${Date.now().toString().slice(-4)}`,
        images: property.images && property.images.length > 0 ? property.images : ['https://picsum.photos/seed/newprop/1200/800'],
        features: [],
      } as Property;
      setProperties(prev => [...prev, newProperty]);
    } else {
      setProperties(prev => prev.map(p => p.id === id ? property as Property : p));
    }
    navigate('/admin/properties');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{isNew ? 'Add New Property' : 'Edit Property'}</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-6">
        {/* ... other form fields ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title (EN)</label>
                <input name="title.en" value={property.title?.en} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Title (ES)</label>
                <input name="title.es" value={property.title?.es} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" required />
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select name="category" value={property.category} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500">
                    <option value="villas">Villas</option>
                    <option value="townhouses">Townhouses</option>
                    <option value="apartments">Apartments</option>
                    <option value="new-developments">New Developments</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Subcategory (EN)</label>
                <input name="subcategory.en" value={property.subcategory?.en} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Subcategory (ES)</label>
                <input name="subcategory.es" value={property.subcategory?.es} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Price (€)</label>
                <input type="number" name="price" value={property.price} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                <input type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Area (m²)</label>
                <input type="number" name="area" value={property.area} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Plot (m²)</label>
                <input type="number" name="plot" value={property.plot} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Full Description (EN)</label>
            <textarea name="fullDescription.en" value={property.fullDescription?.en} onChange={handleChange} rows={6} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Full Description (ES)</label>
            <textarea name="fullDescription.es" value={property.fullDescription?.es} onChange={handleChange} rows={6} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
        </div>

        {/* Robust Image Upload Section */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Manage Images</label>
            <div className="mt-2 space-y-4">
                <div 
                    onDragEnter={handleDragEvents} 
                    onDragOver={handleDragEvents}
                    onDragLeave={handleDragEvents}
                    onDrop={handleDrop}
                    className={`relative block w-full border-2 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${isDragging ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                    <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only" 
                        multiple 
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Drag & drop files here
                        </span>
                        <span className="block text-xs text-gray-500">or click to browse</span>
                    </label>
                </div>

                {property.images && property.images.length > 0 ? (
                    <>
                        <p className="text-xs text-gray-500 text-center">Drag to reorder</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {property.images.map((img, index) => (
                                <div 
                                    key={index}
                                    className={`relative group cursor-move ${draggedImageIndex === index ? 'opacity-50' : ''}`}
                                    draggable="true"
                                    onDragStart={() => handleDragStart(index)}
                                    onDragOver={handleDragOver}
                                    onDrop={() => handleDropReorder(index)}
                                    onDragEnd={handleDragEnd}
                                >
                                    <img src={img} alt={`Property image ${index + 1}`} className="h-24 w-full object-cover rounded-md" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() => handleImageRemove(index)}
                                            className="p-1 bg-white rounded-full text-red-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            title="Remove image"
                                        >
                                            <XCircleIcon className="w-8 h-8"/>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </>
                ) : (
                    <p className="text-sm text-center text-gray-500 py-4">No images uploaded yet.</p>
                )}
            </div>
        </div>


        <div className="flex items-center">
            <input type="checkbox" name="featured" checked={property.featured} onChange={handleChange} className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
            <label className="ml-2 block text-sm text-gray-900">Featured Property</label>
        </div>

        <div className="flex justify-end space-x-4 pt-4 border-t">
          <button type="button" onClick={() => navigate('/admin/properties')} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Save Property</button>
        </div>
      </form>
    </div>
  );
};

export default AdminPropertyEditPage;
