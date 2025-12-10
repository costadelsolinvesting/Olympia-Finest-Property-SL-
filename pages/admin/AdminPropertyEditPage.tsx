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
    const newImageUrls = Array.from(files).map((file) => {
        const safeFileName = file.name.replace(/[^a-zA-Z0-9-.]/g, '_');
        return `/images/${safeFileName}`;
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

  const handleDragEvents = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
        setIsDragging(true);
    } else if (e.type === 'dragleave') {
        setIsDragging(false);
    }
  };
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const propertyToSave = isNew ? {
        ...property,
        id: `prop-${Date.now()}`,
        ref: `OFP-${Date.now().toString().slice(-4)}`,
        images: property.images && property.images.length > 0 ? property.images : ['/images/placeholder.jpg'],
        features: [],
    } as Property : property as Property;

    const formData = new FormData();
    formData.append("form-name", "property-submission");
    formData.append("propertyData", JSON.stringify(propertyToSave));
    formData.append("isNew", isNew.toString());

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString()
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        setProperties(prev => {
            if (isNew) {
                return [...prev, propertyToSave];
            } else {
                return prev.map(p => p.id === id ? propertyToSave : p);
            }
        });
        
        alert(`Propriété ${isNew ? 'ajoutée' : 'modifiée'} ! Données envoyées à Netlify Forms.`);

    } catch (error) {
        alert('Erreur lors de l\'enregistrement. Les données sont toujours sauvegardées dans Netlify Forms.');
    }
    
    navigate('/admin/properties');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{isNew ? 'Add New Property' : 'Edit Property'}</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-6">
        <input type="hidden" name="form-name" value="property-submission" />
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
        
        <div className="grid grid-cols-1 md:
