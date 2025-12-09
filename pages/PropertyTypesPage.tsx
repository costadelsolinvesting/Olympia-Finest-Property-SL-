
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { navStructure } from '../data/translations';

const PropertyTypesPage: React.FC = () => {
  const { t } = useTranslations();
  const propertyTypes = navStructure.find(item => item.id === 'propertyTypes')?.children || [];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{t('propertyTypes')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('propertyTypesDesc', 'Explore our curated selection of properties on the Costa del Sol.')}</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {propertyTypes.map((type) => (
            <Link key={type.id} to={type.path} className="group relative block overflow-hidden rounded-lg">
              <img src={`https://picsum.photos/seed/${type.id}/800/600`} alt={t(type.label)} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-3xl font-bold">{t(type.label)}</h2>
                  {type.children && (
                    <div className="mt-4 space-x-2">
                        {type.children.map(child => (
                           <span key={child.id} className="inline-block bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">{t(child.label)}</span>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyTypesPage;
