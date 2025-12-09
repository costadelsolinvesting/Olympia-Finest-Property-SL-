
import React from 'react';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';
import { ServiceIcons } from '../components/ServiceIcons';

const ServicesPage: React.FC = () => {
  const { services } = useData();
  const { t, T } = useTranslations();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{t('services')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('servicesSubtitle', 'Comprehensive support for your real estate journey on the Costa del Sol.')}</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white mx-auto mb-6">
                {ServiceIcons[service.icon] || ServiceIcons.DefaultIcon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800">{T(service.title)}</h3>
              <p className="mt-4 text-gray-600 text-center">{T(service.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
