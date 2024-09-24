import React from 'react';
import './Servicios.css';

import maxImage from '../assets/max.png';
import lunaImage from '../assets/luna.png';
import rockyImage from '../assets/rocky.png';
import bellaImage from '../assets/bella.png';
import oliverImage from '../assets/oliver.png';
import buddyImage from '../assets/buddy.png';

import apadrinarImage from '../assets/apadrinar.png';
import esterilizacionImage from '../assets/esterilizacion.png';
import eventosImage from '../assets/Eventos.png';
import orientacionImage from '../assets/orientacion.png';
import seguimientoImage from '../assets/Seguimiento.png';

interface Pet {
  name: string;
  description: string;
  imageUrl: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const pets: Pet[] = [
  {
    name: 'Max',
    description: 'Max es un perro juguetón y amigable que ama correr.',
    imageUrl: maxImage,
  },
  {
    name: 'Luna',
    description: 'Luna es una gatita tranquila y amorosa.',
    imageUrl: lunaImage,
  },
  {
    name: 'Rocky',
    description:
      'Rocky es un perro de gran energía y le encanta jugar a la pelota.',
    imageUrl: rockyImage,
  },
  {
    name: 'Bella',
    description:
      'Bella es una perrita encantadora en busca de un hogar cariñoso.',
    imageUrl: bellaImage,
  },
  {
    name: 'Oliver',
    description: 'Oliver es un gato astuto y muy curioso.',
    imageUrl: oliverImage,
  },
  {
    name: 'Buddy',
    description: 'Buddy es un perrito que adora la compañía humana.',
    imageUrl: buddyImage,
  },
];

const services: Service[] = [
  {
    title: 'Programas de Apadrinamiento',
    description:
      'Apadrina una mascota en necesidad y asegúrate de que reciba los cuidados necesarios.',
    imageUrl: apadrinarImage,
  },
  {
    title: 'Campañas de Esterilización y Conciencia',
    description:
      'Participa en nuestras campañas para controlar la población de mascotas.',
    imageUrl: esterilizacionImage,
  },
  {
    title: 'Eventos y Actividades',
    description:
      'Únete a nuestros eventos y actividades para recaudar fondos y crear conciencia.',
    imageUrl: eventosImage,
  },
  {
    title: 'Orientación y Asesoramiento',
    description:
      'Recibe orientación sobre el cuidado de tu mascota y el proceso de adopción.',
    imageUrl: orientacionImage,
  },
  {
    title: 'Seguimiento Post-Adopción',
    description:
      'Te acompañamos después de la adopción para asegurar el bienestar de tu mascota.',
    imageUrl: seguimientoImage,
  },
];

const Servicios: React.FC = () => {
  const handleContact = (petName: string) => {
    alert(`Contactando sobre la adopción de ${petName}`);
  };

  const handleServiceAction = (serviceTitle: string) => {
    alert(`Más información sobre ${serviceTitle}`);
  };

  return (
    <div className="servicios-container">
      {/* Sección de adopción */}
      <section className="adopcion-section">
        <h1 className="section-title">Mascotas Disponibles para Adopción</h1>
        <div className="pet-list">
          {pets.map((pet, index) => (
            <div key={index} className="card">
              <img
                src={pet.imageUrl}
                alt={`Imagen de ${pet.name}`}
                className="card-image"
              />
              <h2 className="card-title">{pet.name}</h2>
              <p>{pet.description}</p>
              <button onClick={() => handleContact(pet.name)}>Adoptar</button>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de otros servicios */}
      <section className="otros-servicios-section">
        <h1 className="section-title">Otros Servicios</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="card">
              <img
                src={service.imageUrl}
                alt={`Imagen de ${service.title}`}
                className="card-image"
              />
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description}</p>
              <button onClick={() => handleServiceAction(service.title)}>
                Saber Más
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicios;
