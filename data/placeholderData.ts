
import { Property, NewsPost, Service } from '../types';

export const properties: Property[] = [
  {
    id: 'villa-1',
    ref: 'OFP-V001',
    title: { en: 'Luxury Villa with Sea View in Marbella', es: 'Villa de Lujo con Vistas al Mar en Marbella' },
    category: 'villas',
    subcategory: { en: 'Luxury Villa', es: 'Villa de lujo' },
    location: { en: 'Marbella, Costa del Sol', es: 'Marbella, Costa del Sol' },
    price: 2500000,
    bedrooms: 5,
    bathrooms: 6,
    area: 550,
    plot: 1200,
    shortDescription: { en: 'Stunning modern villa with panoramic sea views and infinity pool.', es: 'Impresionante villa moderna con vistas panorámicas al mar y piscina infinita.' },
    fullDescription: { en: 'This is a long description about the stunning modern villa. It has state-of-the-art technology, spacious living areas, and beautiful gardens. Perfect for luxury living on the Costa del Sol.', es: 'Esta es una descripción larga sobre la impresionante villa moderna. Cuenta con tecnología de última generación, amplias zonas de estar y hermosos jardines. Perfecta para una vida de lujo en la Costa del Sol.' },
    features: [
      { en: 'Infinity Pool', es: 'Piscina Infinita' },
      { en: 'Panoramic Sea Views', es: 'Vistas Panorámicas al Mar' },
      { en: 'Home Cinema', es: 'Cine en Casa' },
      { en: 'Underfloor Heating', es: 'Suelo Radiante' },
    ],
    images: ['https://picsum.photos/seed/villa1/1200/800', 'https://picsum.photos/seed/villa1-2/800/600', 'https://picsum.photos/seed/villa1-3/800/600'],
    featured: true,
  },
  {
    id: 'apartment-1',
    ref: 'OFP-A001',
    title: { en: 'Turn Key Apartment in Estepona', es: 'Apartamento Llave en Mano en Estepona' },
    category: 'apartments',
    subcategory: { en: 'Turn Key New Apartments', es: 'Apartamentos llave en mano' },
    location: { en: 'Estepona, Costa del Sol', es: 'Estepona, Costa del Sol' },
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    shortDescription: { en: 'Brand new apartment in a new development, ready to move in.', es: 'Apartamento a estrenar en una nueva promoción, listo para entrar a vivir.' },
    fullDescription: { en: 'Located in a prestigious new development, this apartment offers modern design, high-quality finishes, and access to communal pools and gardens. A turnkey solution for a perfect holiday home or investment.', es: 'Ubicado en una prestigiosa nueva promoción, este apartamento ofrece un diseño moderno, acabados de alta calidad y acceso a piscinas y jardines comunitarios. Una solución llave en mano para una casa de vacaciones o inversión perfecta.' },
    features: [
        { en: 'Communal Pool', es: 'Piscina Comunitaria' },
        { en: 'Gated Community', es: 'Comunidad Cerrada' },
        { en: 'Close to Golf', es: 'Cerca del Golf' },
    ],
    images: ['https://picsum.photos/seed/apt1/1200/800', 'https://picsum.photos/seed/apt1-2/800/600'],
    featured: true,
  },
   {
    id: 'townhouse-1',
    ref: 'OFP-T001',
    title: { en: 'Charming Townhouse in Mijas', es: 'Adosado con Encanto en Mijas' },
    category: 'townhouses',
    subcategory: { en: 'Best Deals', es: 'Ofertas destacadas' },
    location: { en: 'Mijas, Costa del Sol', es: 'Mijas, Costa del Sol' },
    price: 450000,
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    plot: 50,
    shortDescription: { en: 'A beautiful townhouse with a private garden and community pool.', es: 'Un hermoso adosado con jardín privado y piscina comunitaria.' },
    fullDescription: { en: 'This charming townhouse is located in a quiet urbanization in Mijas. It features three spacious bedrooms, a cozy living room with a fireplace, and a lovely private terrace. The community offers a large swimming pool and well-maintained gardens.', es: 'Este encantador adosado se encuentra en una tranquila urbanización en Mijas. Cuenta con tres amplios dormitorios, un acogedor salón con chimenea y una bonita terraza privada. La comunidad ofrece una gran piscina y jardines bien cuidados.' },
    features: [
        { en: 'Private Garden', es: 'Jardín Privado' },
        { en: 'Community Pool', es: 'Piscina Comunitaria' },
        { en: 'Fireplace', es: 'Chimenea' },
    ],
    images: ['https://picsum.photos/seed/townhouse1/1200/800', 'https://picsum.photos/seed/townhouse1-2/800/600'],
    featured: true,
  },
  {
    id: 'new-dev-1',
    ref: 'OFP-ND001',
    title: { en: 'New Development: The Málaga Skyline', es: 'Nueva Promoción: The Málaga Skyline' },
    category: 'new-developments',
    subcategory: { en: 'Turnkeys in New Developments', es: 'Llave en mano en nuevas promociones' },
    location: { en: 'Málaga, Costa del Sol', es: 'Málaga, Costa del Sol' },
    price: 800000,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    shortDescription: { en: 'Exclusive collection of modern apartments and penthouses.', es: 'Colección exclusiva de modernos apartamentos y áticos.' },
    fullDescription: { en: 'An iconic project offering a unique living experience with breathtaking views over the city and the Mediterranean. Top-of-the-line amenities include a rooftop pool, gym, and co-working space.', es: 'Un proyecto icónico que ofrece una experiencia de vida única con impresionantes vistas sobre la ciudad y el Mediterráneo. Las comodidades de primera línea incluyen una piscina en la azotea, gimnasio y espacio de coworking.' },
    features: [
        { en: 'Rooftop Pool', es: 'Piscina en la Azotea' },
        { en: 'Gym & Spa', es: 'Gimnasio y Spa' },
        { en: '24h Security', es: 'Seguridad 24h' },
    ],
    images: ['https://picsum.photos/seed/newdev1/1200/800'],
    featured: true,
  },
];

export const newsPosts: NewsPost[] = [
  {
    id: 'post-1',
    title: { en: 'Costa del Sol Market Update Q3 2024', es: 'Actualización del Mercado de la Costa del Sol T3 2024' },
    date: '2024-09-15',
    category: { en: 'Market Analysis', es: 'Análisis de Mercado' },
    excerpt: { en: 'Discover the latest trends in the Costa del Sol real estate market, with insights on pricing and demand.', es: 'Descubra las últimas tendencias en el mercado inmobiliario de la Costa del Sol, con información sobre precios y demanda.' },
    content: { en: 'Full content of the market update goes here...', es: 'El contenido completo de la actualización del mercado va aquí...' },
    author: 'John Doe',
    image: 'https://picsum.photos/seed/news1/1000/600',
  },
  {
    id: 'post-2',
    title: { en: 'Top 5 Areas to Invest in Near Málaga', es: 'Las 5 Mejores Zonas para Invertir Cerca de Málaga' },
    date: '2024-08-22',
    category: { en: 'Investment Guide', es: 'Guía de Inversión' },
    excerpt: { en: 'We explore the most promising locations for real estate investment along the coast, from Estepona to Málaga city.', es: 'Exploramos las ubicaciones más prometedoras para la inversión inmobiliaria a lo largo de la costa, desde Estepona hasta Málaga capital.' },
    content: { en: 'Full content of the investment guide goes here...', es: 'El contenido completo de la guía de inversión va aquí...' },
    author: 'Jane Smith',
    image: 'https://picsum.photos/seed/news2/1000/600',
  },
];

export const services: Service[] = [
    {
        icon: 'BuyerIcon',
        title: { en: 'Buyer Representation', es: 'Representación del Comprador' },
        description: { en: 'We guide you through the entire purchasing process, from search to signature.', es: 'Le guiamos durante todo el proceso de compra, desde la búsqueda hasta la firma.' }
    },
    {
        icon: 'SellerIcon',
        title: { en: 'Seller Representation', es: 'Representación del Vendedor' },
        description: { en: 'Expert marketing and negotiation to get the best price for your property.', es: 'Marketing experto y negociación para obtener el mejor precio por su propiedad.' }
    },
    {
        icon: 'InvestmentIcon',
        title: { en: 'Investment Advisory', es: 'Asesoramiento de Inversión' },
        description: { en: 'Data-driven advice to maximize your return on real estate investments.', es: 'Asesoramiento basado en datos para maximizar el retorno de sus inversiones inmobiliarias.' }
    },
    {
        icon: 'RelocationIcon',
        title: { en: 'Relocation Assistance', es: 'Asistencia en Reubicación' },
        description: { en: 'Comprehensive support for your move to the Costa del Sol.', es: 'Soporte integral para su mudanza a la Costa del Sol.' }
    },
    {
        icon: 'TurnkeyIcon',
        title: { en: 'Turnkey Solutions', es: 'Soluciones Llave en Mano' },
        description: { en: 'We handle everything from renovation to furnishing, delivering a home ready to enjoy.', es: 'Nos encargamos de todo, desde la reforma hasta el amueblado, entregando una vivienda lista para disfrutar.' }
    },
];
