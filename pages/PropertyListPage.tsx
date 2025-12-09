
import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';

const PropertyListPage: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string, subcategory?: string }>();
  const { properties } = useData();
  const { t, T, language } = useTranslations();
  
  const [filters, setFilters] = useState({ price: 'all', bedrooms: 'all', location: 'all' });

  const filteredProperties = useMemo(() => {
    let categoryKey = category?.replace(/-/g, '') as string;
    
    // Normalize categories from URL to match data
    if (categoryKey === 'newdevelopments') categoryKey = 'new-developments';

    let props = properties.filter(p => p.category.replace(/-/g, '') === categoryKey);

    if (subcategory) {
        // This subcategory filtering is based on a simple match. A more robust system would use IDs.
        props = props.filter(p => T(p.subcategory).toLowerCase().replace(/\s+/g, '-') === subcategory);
    }
    
    // Apply filters
    if (filters.price !== 'all') {
        const [min, max] = filters.price.split('-').map(Number);
        props = props.filter(p => p.price >= min && (max ? p.price <= max : true));
    }
    if (filters.bedrooms !== 'all') {
        props = props.filter(p => p.bedrooms >= Number(filters.bedrooms));
    }
    if (filters.location !== 'all') {
        props = props.filter(p => T(p.location).toLowerCase().includes(filters.location.toLowerCase()));
    }
    
    return props;
  }, [category, subcategory, properties, T, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const pageTitle = subcategory 
    ? filteredProperties[0] ? T(filteredProperties[0].subcategory) : subcategory
    : category ? t(category.replace(/-/g, '')) : t('allProperties');
    
  const locations = [...new Set(properties.map(p => T(p.location)))];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold text-gray-800 capitalize">{pageTitle}</h1>
          <div className="mt-2 w-20 h-1 bg-red-600"></div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">{t('price')}</label>
                <select id="price" name="price" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option value="all">{t('all', 'All')}</option>
                    <option value="0-500000">€0 - €500,000</option>
                    <option value="500000-1000000">€500,000 - €1,000,000</option>
                    <option value="1000000-2000000">€1,000,000 - €2,000,000</option>
                    <option value="2000000-99999999">€2,000,000+</option>
                </select>
            </div>
            <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">{t('bedrooms')}</label>
                <select id="bedrooms" name="bedrooms" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option value="all">{t('any', 'Any')}</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">{t('location')}</label>
                <select id="location" name="location" onChange={handleFilterChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                    <option value="all">{t('allLocations', 'All Locations')}</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
            </div>
        </div>

        {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <p className="text-xl text-gray-600">{t('noPropertiesFound', 'No properties match the current criteria.')}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListPage;
