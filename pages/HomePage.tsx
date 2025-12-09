
import React from 'react';
import { useData } from '../contexts/DataContext';
import { useTranslations } from '../hooks/useTranslations';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import { services } from '../data/placeholderData';
import { ServiceIcons } from '../components/ServiceIcons';

const HomePage: React.FC = () => {
  const { properties } = useData();
  const { t, T } = useTranslations();
  const featuredProperties = properties.filter(p => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Olympia Finest Property</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">{t('heroSubtitle', 'Your International Real Estate Agency on the Costa del Sol')}</p>
          <Link to="/property-types" className="mt-8 px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300">
            {t('viewProperties', 'View Properties')}
          </Link>
        </div>
      </section>
      
      {/* Property Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">{t('propertyTypes')}</h2>
                <div className="mt-2 w-20 h-1 bg-red-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {['villas', 'townhouses', 'apartments', 'newDevelopments'].map(type => (
                    <Link key={type} to={`/properties/${type.replace(/\s+/g, '-').toLowerCase()}`} className="group block text-center">
                        <div className="relative overflow-hidden rounded-lg">
                            <img src={`https://picsum.photos/seed/${type}/600/400`} alt={t(type)} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold text-white">{t(type)}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t('featuredProperties')}</h2>
            <div className="mt-2 w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t('whyChooseUs')}</h2>
            <div className="mt-2 w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white mx-auto">
                    {ServiceIcons['InvestmentIcon']}
                </div>
              <h3 className="mt-4 text-xl font-semibold">{t('internationalClientele', 'International Clientele')}</h3>
              <p className="mt-2 text-gray-600">{t('internationalClienteleDesc', 'We cater to a global audience, providing seamless service across languages and cultures.')}</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white mx-auto">
                    {ServiceIcons['RelocationIcon']}
                </div>
              <h3 className="mt-4 text-xl font-semibold">{t('localExpertise', 'Local Expertise')}</h3>
              <p className="mt-2 text-gray-600">{t('localExpertiseDesc', 'Our deep knowledge of the Costa del Sol ensures you get the best advice and access to exclusive properties.')}</p>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white mx-auto">
                    {ServiceIcons['BuyerIcon']}
                </div>
              <h3 className="mt-4 text-xl font-semibold">{t('bespokeService', 'Bespoke Service')}</h3>
              <p className="mt-2 text-gray-600">{t('bespokeServiceDesc', 'A personalized approach to meet your unique needs, whether buying, selling, or investing.')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
