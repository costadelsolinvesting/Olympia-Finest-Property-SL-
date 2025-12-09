
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Property, NewsPost, Service } from '../types';
import { properties as initialProperties, newsPosts as initialNewsPosts, services as initialServices } from '../data/placeholderData';

interface DataContextType {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  newsPosts: NewsPost[];
  setNewsPosts: React.Dispatch<React.SetStateAction<NewsPost[]>>;
  services: Service[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [newsPosts, setNewsPosts] = useState<NewsPost[]>(initialNewsPosts);
  const [services] = useState<Service[]>(initialServices);

  return (
    <DataContext.Provider value={{ properties, setProperties, newsPosts, setNewsPosts, services }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
