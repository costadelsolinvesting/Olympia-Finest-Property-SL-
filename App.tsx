
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { DataProvider } from './contexts/DataContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PropertyTypesPage from './pages/PropertyTypesPage';
import PropertyListPage from './pages/PropertyListPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ServicesPage from './pages/ServicesPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminPropertiesPage from './pages/admin/AdminPropertiesPage';
import AdminPropertyEditPage from './pages/admin/AdminPropertyEditPage';
import AdminNewsPage from './pages/admin/AdminNewsPage';
import AdminNewsEditPage from './pages/admin/AdminNewsEditPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import ProtectedRoute from './components/admin/ProtectedRoute';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <DataProvider>
        <AuthProvider>
          <ThemeProvider>
            <HashRouter>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                  <Route index element={<AdminDashboardPage />} />
                  <Route path="properties" element={<AdminPropertiesPage />} />
                  <Route path="properties/edit/:id" element={<AdminPropertyEditPage />} />
                  <Route path="properties/new" element={<AdminPropertyEditPage />} />
                  <Route path="news" element={<AdminNewsPage />} />
                  <Route path="news/edit/:id" element={<AdminNewsEditPage />} />
                  <Route path="news/new" element={<AdminNewsEditPage />} />
                  <Route path="settings" element={<AdminSettingsPage />} />
                </Route>

                {/* Public Site Routes */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="property-types" element={<PropertyTypesPage />} />
                  <Route path="properties/:category" element={<PropertyListPage />} />
                  <Route path="properties/:category/:subcategory" element={<PropertyListPage />} />
                  <Route path="property/:id" element={<PropertyDetailPage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="news" element={<NewsPage />} />
                  <Route path="news/:id" element={<NewsDetailPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                </Route>
              </Routes>
            </HashRouter>
          </ThemeProvider>
        </AuthProvider>
      </DataProvider>
    </LanguageProvider>
  );
};

export default App;
