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
        // NOTE: We use a simulated path for Netlify Forms to capture the *name*
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
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0)
