
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';
import { SocialIcons } from './SocialIcons';

const Footer: React.FC = () => {
  const { t } = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-gray-800">
              Olympia<span className="text-red-600">Finest</span>Property
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {t('internationalRealEstate')}
            </p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-base text-gray-600 hover:text-red-600">{t('home')}</Link></li>
              <li><Link to="/property-types" className="text-base text-gray-600 hover:text-red-600">{t('propertyTypes')}</Link></li>
              <li><Link to="/services" className="text-base text-gray-600 hover:text-red-600">{t('services')}</Link></li>
              <li><Link to="/news" className="text-base text-gray-600 hover:text-red-600">{t('news')}</Link></li>
              <li><Link to="/contact" className="text-base text-gray-600 hover:text-red-600">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('contact')}</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-600">
              <li><a href="mailto:info@olympiafinestproperty.com" className="hover:text-red-600">info@olympiafinestproperty.com</a></li>
              <li>{t('freeToll')}: 900 525 801</li>
              <li>WhatsApp: +34 951 204 618</li>
              <li className="pt-2">Costa del Sol, Spain</li>
            </ul>
          </div>

          {/* Language & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{t('language')}</h3>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
            <div className="mt-6">
                <Link to="/privacy-policy" className="text-base text-gray-600 hover:text-red-600">{t('privacyPolicy')}</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-200 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Olympia Finest Property. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
