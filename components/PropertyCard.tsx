
import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { MapPinIcon, BuildingOffice2Icon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import ImageWithProtection from './ImageWithProtection';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { T } = useTranslations();
  
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative">
          <ImageWithProtection
            src={property.images[0]}
            alt={T(property.title)}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {T(property.subcategory)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-red-600">{T(property.title)}</h3>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <MapPinIcon className="w-4 h-4 mr-1"/>
            {T(property.location)}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-red-600">
              €{property.price.toLocaleString('de-DE')}
            </p>
            <div className="flex space-x-3 text-sm text-gray-600">
              <span className="flex items-center">
                <BuildingOffice2Icon className="w-4 h-4 mr-1"/>
                {property.bedrooms}
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {property.bathrooms}
              </span>
              <span className="flex items-center">
                <ArrowsPointingOutIcon className="w-4 h-4 mr-1"/>
                {property.area} m²
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
