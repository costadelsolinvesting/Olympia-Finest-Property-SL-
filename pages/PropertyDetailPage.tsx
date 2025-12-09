
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';
import { MapPinIcon, BuildingOffice2Icon, ArrowsPointingOutIcon, CheckIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import ImageWithProtection from '../components/ImageWithProtection';
import { propertyWhatsappMessages } from '../data/translations';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { properties } = useData();
  const { t, T, language } = useTranslations();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <Link to="/" className="text-red-600 hover:underline mt-4 inline-block">Back to Home</Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(propertyWhatsappMessages[language](property.ref));
  const whatsappUrl = `https://wa.me/34951204618?text=${whatsappMessage}`;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{T(property.title)}</h1>
          <p className="text-lg text-gray-500 flex items-center mt-2">
            <MapPinIcon className="w-5 h-5 mr-2" />
            {T(property.location)}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="md:col-span-2">
            <ImageWithProtection src={property.images[0]} alt={T(property.title)} className="w-full h-[60vh] object-cover rounded-lg shadow-lg"/>
          </div>
          {property.images.slice(1).map((img, index) => (
            <ImageWithProtection key={index} src={img} alt={`${T(property.title)} ${index+2}`} className="w-full h-64 object-cover rounded-lg shadow-md"/>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Description */}
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-200 pb-2 mb-4">{t('description')}</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{T(property.fullDescription)}</p>

            {/* Features */}
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-200 pb-2 my-8">{t('features')}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckIcon className="w-5 h-5 mr-2 text-red-600"/>
                  {T(feature)}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky top-24 self-start">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-red-600 mb-4">€{property.price.toLocaleString('de-DE')}</p>
              
              <div className="space-y-3 text-gray-700 border-t pt-4">
                <p><strong className="font-semibold">{t('reference')}:</strong> {property.ref}</p>
                <p className="flex items-center"><BuildingOffice2Icon className="w-5 h-5 mr-2"/><strong>{t('bedrooms')}:</strong> {property.bedrooms}</p>
                <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><strong>{t('bathrooms')}:</strong> {property.bathrooms}</p>
                <p className="flex items-center"><ArrowsPointingOutIcon className="w-5 h-5 mr-2"/><strong>{t('area')}:</strong> {property.area} m²</p>
                {property.plot && <p className="flex items-center"><ArrowsPointingOutIcon className="w-5 h-5 mr-2"/><strong>{t('plot')}:</strong> {property.plot} m²</p>}
              </div>

              <div className="mt-6 border-t pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">{t('requestInfo')}</h3>
                <div className="space-y-3">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.502 1.906 6.344l-.275 1.002 1.025-.272zm7.252-7.253c-.328-.158-1.939-.957-2.24-1.072-.3-.115-.519-.158-.738.158-.22.316-.847 1.02-.03 1.282.12.083.847.28.962.316.116.036.22.012.316-.023.115-.059.316-.178.431-.316.115-.138.194-.254.316-.431.121-.196.22-.316.3-.518.08-.18.04-.33-.012-.45z"/></svg>
                        WhatsApp
                    </a>
                    <a href="tel:900525801" className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300">
                        <PhoneIcon className="w-5 h-5 mr-2"/>
                        {t('call')} 900 525 801
                    </a>
                    <a href="mailto:info@olympiafinestproperty.com" className="w-full flex items-center justify-center px-4 py-3 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-800 transition duration-300">
                        <EnvelopeIcon className="w-5 h-5 mr-2"/>
                        Email
                    </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
