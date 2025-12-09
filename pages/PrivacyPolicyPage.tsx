
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslations();

  const content = {
      en: {
          title: "Data Protection & Privacy Policy",
          sections: [
              {
                  title: "1. Data Collection",
                  text: "We collect information you provide directly to us when you fill out a contact form, request information, or otherwise communicate with us. This information may include your name, email address, phone number, and any other details you choose to provide."
              },
              {
                  title: "2. Data Usage",
                  text: "We use the information we collect to provide, maintain, and improve our services. This includes responding to your comments, questions, and requests, and communicating with you about properties, services, offers, and events offered by Olympia Finest Property."
              },
              {
                  title: "3. Data Storage and Security",
                  text: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."
              },
              {
                  title: "4. Cookies",
                  text: "We use cookies to improve and customize your experience on our site. A cookie is a small data file that we transfer to your device's hard disk."
              },
              {
                  title: "5. User Rights",
                  text: "In accordance with GDPR, you have the right to access, rectify, or erase your personal data, as well as the right to restrict or object to its processing. To exercise these rights, please contact us."
              },
              {
                  title: "6. Contact for Data Issues",
                  text: "If you have any questions about this Privacy Policy, please contact us at: info@olympiafinestproperty.com"
              }
          ]
      },
      es: {
          title: "Protección de Datos y Política de Privacidad",
          sections: [
              {
                  title: "1. Recopilación de Datos",
                  text: "Recopilamos la información que usted nos proporciona directamente cuando rellena un formulario de contacto, solicita información o se comunica con nosotros de cualquier otra forma. Esta información puede incluir su nombre, dirección de correo electrónico, número de teléfono y cualquier otro detalle que decida proporcionar."
              },
              {
                  title: "2. Uso de Datos",
                  text: "Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios. Esto incluye responder a sus comentarios, preguntas y solicitudes, y comunicarnos con usted sobre propiedades, servicios, ofertas y eventos ofrecidos por Olympia Finest Property."
              },
              {
                  title: "3. Almacenamiento y Seguridad de Datos",
                  text: "Tomamos medidas razonables para ayudar a proteger su información contra pérdida, robo, uso indebido y acceso, divulgación, alteración y destrucción no autorizados."
              },
              {
                  title: "4. Cookies",
                  text: "Utilizamos cookies para mejorar y personalizar su experiencia en nuestro sitio. Una cookie es un pequeño archivo de datos que transferimos al disco duro de su dispositivo."
              },
              {
                  title: "5. Derechos del Usuario",
                  text: "De acuerdo con el RGPD, usted tiene derecho a acceder, rectificar o suprimir sus datos personales, así como el derecho a restringir u oponerse a su tratamiento. Para ejercer estos derechos, por favor, póngase en contacto con nosotros."
              },
              {
                  title: "6. Contacto para Asuntos de Datos",
                  text: "Si tiene alguna pregunta sobre esta Política de Privacidad, por favor, póngase en contacto con nosotros en: info@olympiafinestproperty.com"
              }
          ]
      }
  };

  const { language } = useTranslations();
  const currentContent = content[language];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{currentContent.title}</h1>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg prose-red mx-auto text-gray-700 space-y-6">
          {currentContent.sections.map(section => (
              <div key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
