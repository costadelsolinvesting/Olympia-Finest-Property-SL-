
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { whatsappMessages } from '../data/translations';

const ContactPage: React.FC = () => {
  const { t, language } = useTranslations();

  const whatsappMessage = encodeURIComponent(whatsappMessages[language]);
  const whatsappUrl = `https://wa.me/34951204618?text=${whatsappMessage}`;

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{t('contactUs')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('contactSubtitle', 'We are here to help you. Reach out to us anytime.')}</p>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">{t('getInTouch', 'Get in Touch')}</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <EnvelopeIcon className="w-6 h-6 mr-3 text-red-600"/>
                <a href="mailto:info@olympiafinestproperty.com" className="hover:text-red-600">info@olympiafinestproperty.com</a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-3 text-red-600"/>
                <div>
                  <p>{t('freeToll')}: 900 525 801</p>
                  <p>WhatsApp: +34 951 204 618</p>
                </div>
              </div>
              <div className="pt-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.502 1.906 6.344l-.275 1.002 1.025-.272zm7.252-7.253c-.328-.158-1.939-.957-2.24-1.072-.3-.115-.519-.158-.738.158-.22.316-.847 1.02-.03 1.282.12.083.847.28.962.316.116.036.22.012.316-.023.115-.059.316-.178.431-.316.115-.138.194-.254.316-.431.121-.196.22-.316.3-.518.08-.18.04-.33-.012-.45z"/></svg>
                  {t('sendMessage')}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('name')}</label>
                  <input type="text" name="name" id="name" placeholder={t('name')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('email')}</label>
                  <input type="email" name="email" id="email" placeholder={t('email')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('phone')}</label>
                  <input type="tel" name="phone" id="phone" placeholder={t('phone')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('message')}</label>
                  <textarea name="message" id="message" rows={4} placeholder={t('message')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300">{t('submit')}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
