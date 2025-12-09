
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../hooks/useTranslations';
import { navStructure } from '../data/translations';
import { SocialIcons } from './SocialIcons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <>
      {navStructure.map((item) => (
        <div key={item.id} className="group relative">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`
            }
          >
            {t(item.label)}
          </NavLink>
          {item.children && (
            <div className={`absolute z-20 mt-1 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-opacity duration-300 ${isMobile ? 'static shadow-none ring-0' : ''}`}>
              <div className="py-1" role="menu" aria-orientation="vertical">
                {item.children.map((child) => (
                  <div key={child.id} className="group/sub relative">
                    <NavLink
                      to={child.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                    >
                      {t(child.label)}
                    </NavLink>
                     {child.children && (
                      <div className="absolute left-full top-0 mt-0 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover/sub:block">
                        <div className="py-1">
                          {child.children.map((grandchild) => (
                            <NavLink
                              key={grandchild.id}
                              to={grandchild.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                            >
                              {t(grandchild.label)}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Olympia<span className="text-red-600">Finest</span>Property
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks />
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <SocialIcons />
            <LanguageSwitcher />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-red-600">
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            {navStructure.map((item) => (
              <div key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `block py-2 text-base font-medium ${isActive ? 'text-red-600' : 'text-gray-700'}`}
                >
                  {t(item.label)}
                </NavLink>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.id}
                        to={child.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-sm text-gray-600"
                      >
                        - {t(child.label)}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                <SocialIcons />
                <LanguageSwitcher />
             </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
