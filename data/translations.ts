
import { BilingualString } from '../types';

interface Translations {
  [key: string]: BilingualString;
}

export const translations: Translations = {
  // Header & Footer
  home: { en: 'Home', es: 'Inicio' },
  propertyTypes: { en: 'Property Types', es: 'Tipos de propiedad' },
  services: { en: 'Services', es: 'Servicios' },
  news: { en: 'News', es: 'Noticias' },
  contact: { en: 'Contact', es: 'Contacto' },
  privacyPolicy: { en: 'Data Protection & Privacy Policy', es: 'Protección de datos y política de privacidad' },
  
  // Property Categories
  villas: { en: 'Villa', es: 'Villa' },
  independentVilla: { en: 'Independent Villa', es: 'Villa independiente' },
  luxuryVilla: { en: 'Luxury Villa', es: 'Villa de lujo' },
  needsRenovation: { en: 'Needs Renovation', es: 'Para reformar' },
  bestDeals: { en: 'Best Deals', es: 'Ofertas destacadas' },
  apartments: { en: 'Apartment', es: 'Apartamentos' },
  luxuryApartment: { en: 'Luxury Apartment', es: 'Apartamento de lujo' },
  turnKeyNewApartments: { en: 'Turn Key New Apartments', es: 'Apartamentos llave en mano' },
  townhouses: { en: 'Townhouses', es: 'Adosados' },
  newDevelopments: { en: 'New Developments', es: 'Nuevas promociones' },
  turnkeysInNewDevelopments: { en: 'Turnkeys in New Developments', es: 'Llave en mano en nuevas promociones' },

  // General
  readMore: { en: 'Read More', es: 'Leer más' },
  sendMessage: { en: 'Send Message', es: 'Enviar Mensaje' },
  allRightsReserved: { en: 'All rights reserved', es: 'Todos los derechos reservados' },
  featuredProperties: { en: 'Featured Properties', es: 'Propiedades Destacadas' },
  whyChooseUs: { en: 'Why Choose Us?', es: '¿Por qué elegirnos?' },
  
  // Contact Page
  contactUs: { en: 'Contact Us', es: 'Contáctenos' },
  name: { en: 'Name', es: 'Nombre' },
  email: { en: 'Email', es: 'Correo electrónico' },
  phone: { en: 'Phone', es: 'Teléfono' },
  message: { en: 'Message', es: 'Mensaje' },
  submit: { en: 'Submit', es: 'Enviar' },
  freeToll: { en: 'Free toll', es: 'Llamada gratuita' },

  // Property Details
  reference: { en: 'Reference', es: 'Referencia' },
  price: { en: 'Price', es: 'Precio' },
  bedrooms: { en: 'Bedrooms', es: 'Dormitorios' },
  bathrooms: { en: 'Bathrooms', es: 'Baños' },
  area: { en: 'Area', es: 'Superficie' },
  plot: { en: 'Plot', es: 'Parcela' },
  features: { en: 'Features', es: 'Características' },
  description: { en: 'Description', es: 'Descripción' },
  location: { en: 'Location', es: 'Ubicación' },
  requestInfo: { en: 'Request Information', es: 'Solicitar Información' },
  call: { en: 'Call', es: 'Llamar' },

  // Image Protection
  imageCopyrightTitle: { en: 'Copyright Notice', es: 'Aviso de Copyright' },
  imageCopyrightMessage: { en: 'Images on this website are protected by copyright. Downloading or reusing them without authorization is not allowed.', es: 'Las imágenes de este sitio web están protegidas por derechos de autor. No está permitido descargarlas ni reutilizarlas sin autorización.' },
  close: { en: 'Close', es: 'Cerrar' },
};

export const navStructure = [
  { id: 'home', path: '/', label: 'home' },
  { 
    id: 'propertyTypes', 
    path: '/property-types', 
    label: 'propertyTypes',
    children: [
      { 
        id: 'villas', 
        path: '/properties/villas', 
        label: 'villas',
        children: [
          { id: 'independentVilla', path: '/properties/villas/independent', label: 'independentVilla' },
          { id: 'luxuryVilla', path: '/properties/villas/luxury', label: 'luxuryVilla' },
          { id: 'needsRenovationVilla', path: '/properties/villas/renovation', label: 'needsRenovation' },
          { id: 'bestDealsVilla', path: '/properties/villas/deals', label: 'bestDeals' },
        ]
      },
      { 
        id: 'apartments', 
        path: '/properties/apartments', 
        label: 'apartments',
        children: [
          { id: 'luxuryApartment', path: '/properties/apartments/luxury', label: 'luxuryApartment' },
          { id: 'needsRenovationApartment', path: '/properties/apartments/renovation', label: 'needsRenovation' },
          { id: 'bestDealsApartment', path: '/properties/apartments/deals', label: 'bestDeals' },
          { id: 'turnKeyNewApartments', path: '/properties/apartments/turnkey', label: 'turnKeyNewApartments' },
        ]
      },
      { id: 'townhouses', path: '/properties/townhouses', label: 'townhouses' },
      { 
        id: 'newDevelopments', 
        path: '/properties/new-developments', 
        label: 'newDevelopments',
        children: [
          { id: 'turnkeysInNewDevelopments', path: '/properties/new-developments/turnkey', label: 'turnkeysInNewDevelopments' },
        ]
      },
    ]
  },
  { id: 'services', path: '/services', label: 'services' },
  { id: 'news', path: '/news', label: 'news' },
  { id: 'contact', path: '/contact', label: 'contact' },
];

export const whatsappMessages = {
    en: "Hello, I am interested in a property from Olympia Finest Property.",
    es: "Hola, estoy interesado en una propiedad de Olympia Finest Property."
}

export const propertyWhatsappMessages = {
    en: (ref: string) => `Hello, I am interested in property ${ref} from Olympia Finest Property.`,
    es: (ref: string) => `Hola, estoy interesado en la propiedad ${ref} de Olympia Finest Property.`
}
