import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';
import './Servicios.css';

import maxImage from '../assets/Max.png';
import lunaImage from '../assets/Luna.png';
import rockyImage from '../assets/Rocky.png';
import bellaImage from '../assets/Bella.png';
import oliverImage from '../assets/Oliver.png';
import buddyImage from '../assets/Buddy.png';

import apadrinarImage from '../assets/apadrinar.png';
import esterilizacionImage from '../assets/esterilizacion.png';
import eventosImage from '../assets/Eventos.png';
import orientacionImage from '../assets/orientacion.png';
import seguimientoImage from '../assets/Seguimiento.png';

interface Pet {
  name: string;
  description: string;
  imageUrl: string;
  age?: string;
  breed?: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  details?: string;
}

const pets: Pet[] = [
  {
    name: 'Max',
    description: 'Max es un perro juguetón y amigable que ama correr.',
    imageUrl: maxImage,
    age: '3 años',
    breed: 'Labrador',
  },
  {
    name: 'Luna',
    description: 'Luna es una gatita tranquila y amorosa.',
    imageUrl: lunaImage,
    age: '2 años',
    breed: 'Siamesa',
  },
  {
    name: 'Rocky',
    description: 'Rocky es un perro de gran energía y le encanta jugar.',
    imageUrl: rockyImage,
    age: '4 años',
    breed: 'Pastor Alemán',
  },
  {
    name: 'Bella',
    description: 'Bella es una perrita encantadora en busca de un hogar cariñoso.',
    imageUrl: bellaImage,
    age: '1 año',
    breed: 'Golden Retriever',
  },
  {
    name: 'Oliver',
    description: 'Oliver es un gato astuto y muy curioso.',
    imageUrl: oliverImage,
    age: '5 años',
    breed: 'Atigrado',
  },
  {
    name: 'Buddy',
    description: 'Buddy es un perrito que adora la compañía humana.',
    imageUrl: buddyImage,
    age: '6 meses',
    breed: 'Beagle',
  },
];

const services: Service[] = [
  {
    title: 'Programas de Apadrinamiento',
    description: 'Apadrina una mascota en necesidad y asegúrate de que reciba los cuidados necesarios.',
    imageUrl: apadrinarImage,
    details: 'Puedes apoyar con alimentación, atención médica y más.',
  },
  {
    title: 'Campañas de Esterilización y Conciencia',
    description: 'Participa en nuestras campañas para controlar la población de mascotas.',
    imageUrl: esterilizacionImage,
    details: 'Ofrecemos esterilizaciones gratuitas para mascotas en comunidades vulnerables.',
  },
  {
    title: 'Eventos y Actividades',
    description: 'Únete a nuestros eventos y actividades para recaudar fondos y crear conciencia.',
    imageUrl: eventosImage,
    details: 'Carreras de mascotas, ferias de adopción y más eventos divertidos.',
  },
  {
    title: 'Orientación y Asesoramiento',
    description: 'Recibe orientación sobre el cuidado de tu mascota y el proceso de adopción.',
    imageUrl: orientacionImage,
    details: 'Asesoría gratuita en alimentación, cuidados médicos y entrenamiento.',
  },
  {
    title: 'Seguimiento Post-Adopción',
    description: 'Te acompañamos después de la adopción para asegurar el bienestar de tu mascota.',
    imageUrl: seguimientoImage,
    details: 'Consultas periódicas para asegurar la adaptación de tu nueva mascota.',
  },
];

const Servicios: React.FC = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleContact = (pet: Pet) => {
    setSelectedPet(pet);
    setModalIsOpen(true);
  };

  const handleServiceAction = (service: Service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPet(null);
    setSelectedService(null);
  };

  const handleAdoptNow = () => {
    // Redirigir usando navigate
    navigate('/adopta'); // Asegúrate de que esta ruta esté definida en tu router
  };

  const handleContactUs = () => {
    // Lógica para abrir WhatsApp
    const message = "Hola, me gustaría obtener más información sobre los servicios.";
    const phoneNumber = "123456789"; //número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="servicios-container">
      {/* Sección de adopción */}
      <section className="adopcion-section" id="adopcion">
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
              <button onClick={() => handleContact(pet)}>Adoptar</button>
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
              <button onClick={() => handleServiceAction(service)}>
                Saber Más
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal para más detalles */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        ariaHideApp={false}
      >
        {selectedPet && (
          <div className="modal-content">
            <img
              src={selectedPet.imageUrl}
              alt={`Imagen de ${selectedPet.name}`}
              className="modal-image"
            />
            <h2 className="modal-title">¡Adopta a {selectedPet.name}!</h2>
            <p><strong>Edad:</strong> {selectedPet.age}</p>
            <p><strong>Raza:</strong> {selectedPet.breed}</p>
            <p>{selectedPet.description}</p>
            <button onClick={handleAdoptNow}>Adopta Ya</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
        {selectedService && (
          <div className="modal-content">
            <h2 className="modal-title">{selectedService.title}</h2>
            <img
              src={selectedService.imageUrl}
              alt={`Imagen de ${selectedService.title}`}
              className="modal-image"
            />
            <p>{selectedService.description}</p>
            <p><strong>Detalles:</strong> {selectedService.details}</p>
            <button onClick={handleContactUs}>Contáctanos</button>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default Servicios;
