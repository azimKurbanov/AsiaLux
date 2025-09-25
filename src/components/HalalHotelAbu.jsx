import React, { useState } from 'react';
import hotel1 from '../assets/hotel1.png';
import hotel2 from '../assets/hotel2.png';
import hotel3 from '../assets/hotel3.png';
import hotel4 from '../assets/hotel4.png';
import hotel5 from '../assets/hotel5.png';
import hotel6 from '../assets/hotel6.png';
import hotel7 from '../assets/hotel7.png';

const hotels = [
  {
    id: 1,
    name: 'Sah Inn Paradise (Halal Concept)',
    location: 'Анталья',
    rating: 5.0,
    description: 'Роскошный халяль-отель на побережье Антальи.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel1, hotel2, hotel3],
    guestRating: 4.5,
    guestReviewsCount: 120,
    address: 'Antalya, Turkey',
    mapEmbedUrl: 'https://maps.app.goo.gl/1HjTEAuq2Z69NFmk6', 
  },
  {
    id: 2,
    name: 'Bera Hotel Alanya',
    location: 'Анталья',
    rating: 5.0,
    description: 'Семейный отель с халяль концепцией и приватными пляжами.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel2, hotel3, hotel4],
    guestRating: 4.7,
    guestReviewsCount: 90,
    address: 'Konakli Mh. Kulak Mevkii No 12, Alanya, 07400',
    mapEmbedUrl: 'https://maps.app.goo.gl/Syeycs14726enPRL7',
  },
  {
    id: 3,
    name: 'Rizom Beach (Halal Concept)',
    location: 'Анталья',
    rating: 5.0,
    description: 'Прекрасное место для отдыха с детьми.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel3, hotel4, hotel5],
    guestRating: 4.3,
    guestReviewsCount: 105,
    address: 'Antalya Beach',
    mapEmbedUrl: 'https://maps.app.goo.gl/8VGBTePN5BTrkxZh9',
  },
  {
    id: 4,
    name: 'Modern Saraylar',
    location: 'Анталья',
    rating: 5.0,
    description: 'Современный отель с халяль питанием и SPA.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel4, hotel5, hotel6],
    guestRating: 4.8,
    guestReviewsCount: 87,
    address: 'Modern Saraylar Address',
    mapEmbedUrl: 'https://maps.app.goo.gl/c74R5EHxDFLvZGWd9',
  },
  {
    id: 5,
    name: 'Selge Beach Resort & Spa',
    location: 'Анталья',
    rating: 5.0,
    description: 'Популярный халяль-курорт с множеством удобств.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel5, hotel6, hotel7],
    guestRating: 4.6,
    guestReviewsCount: 140,
    address: 'Selge Beach Resort Address',
    mapEmbedUrl: 'https://maps.app.goo.gl/mQCX23v3Fs6Tzaqn8',
  },
  {
    id: 6,
    name: 'Adin Beach Hotel',
    location: 'Анталья',
    rating: 4.8,
    description: 'Приватные пляжи для мужчин и женщин.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel6, hotel7, hotel1],
    guestRating: 4.4,
    guestReviewsCount: 77,
    address: 'Adin Beach Address',
    mapEmbedUrl: 'https://maps.app.goo.gl/AXKwx1nJV3JDdZYDA',
  },
  {
    id: 7,
    name: 'Wome Deluxe',
    location: 'Анталья',
    rating: 4.9,
    description: 'Люксовый отдых по исламским стандартам.',
    checkIn: '14:00',
    checkOut: '11:00',
    images: [hotel7, hotel1, hotel2],
    guestRating: 4.9,
    guestReviewsCount: 130,
    address: 'Wome Deluxe Address',
    mapEmbedUrl: 'https://maps.app.goo.gl/poxByu8J5LarBuTf9',
  },
];

function HotelCard({ hotel, onClick }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      onClick={() => onClick(hotel)}
    >
      <img src={hotel.images[0]} alt={hotel.name} className="w-full h-80 object-cover" />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-3 left-3 bg-lime-400 text-black font-semibold text-sm px-3 py-1 rounded-full shadow">
        Halal
      </div>

      <div className="absolute top-3 right-3 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
        <span>⭐</span>
        <span>{hotel.rating.toFixed(1)}</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <h3 className="text-lg font-bold drop-shadow">{hotel.name}</h3>
        <p className="text-sm flex items-center gap-1 mt-1 text-white/90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {hotel.location}
        </p>
        <button className="mt-4 w-full bg-white/10 backdrop-blur text-white text-sm font-medium py-2 rounded-lg border border-white/30 hover:bg-white/20 transition">
          Подробнее
        </button>
      </div>
    </div>
  );
}

const HalalHotelAbu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Фильтрация по названию
  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleHotels = filteredHotels.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(filteredHotels.length);
  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
    setActiveTab('overview');
  };
  const handleCloseModal = () => setSelectedHotel(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <input
        type="text"
        placeholder="Поиск халяль отеля..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
        className='bg-blue-500 text-white placeholder-white/90 rounded-lg w-full h-15  px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600'
      />

      <div className="items-center mb-6">
        <h2 className="text-2xl font-semibold mb-6">
          Халяль отели <a href="#" className="text-blue-600">Asialuxe</a>
        </h2>
        {visibleCount < filteredHotels.length && (
          <div className="mt-6 text-right">
            <button
              onClick={handleShowMore}
              className="text-blue-600 font-semibold hover:underline"
            >
              Посмотреть все →
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {visibleHotels.length === 0 ? (
          <p>Отели не найдены</p>
        ) : (
          visibleHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} onClick={handleCardClick} />
          ))
        )}
      </div>

      {selectedHotel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              ×
            </button>

            <div className="grid grid-cols-3 gap-2 p-6">
              {selectedHotel.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedHotel.name} photo ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedHotel.name}</h3>
              <div className="flex items-center mb-4 space-x-4">
                <div className="text-yellow-500 font-bold">
                  ★★★★★{' '}
                  <span className="text-gray-800 ml-1">{selectedHotel.rating.toFixed(1)}</span>
                </div>
                <div className="text-gray-600 text-sm">📍 {selectedHotel.location}</div>
              </div>

              <ul className="flex space-x-4 border-b mb-4 text-sm font-medium text-gray-600 cursor-pointer select-none">
                <li
                  className={`pb-2 ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                      : 'border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Обзор
                </li>
                <li
                  className={`pb-2 ${
                    activeTab === 'amenities'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                      : 'border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab('amenities')}
                >
                  Удобства
                </li>
                <li
                  className={`pb-2 ${
                    activeTab === 'policy'
                      ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                      : 'border-b-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab('policy')}
                >
                  Политика
                </li>
              </ul>

              <div className="mb-6 min-h-[100px] text-gray-700">
                {activeTab === 'overview' && <p>{selectedHotel.description}</p>}

                {activeTab === 'amenities' && (
                  <ul className="list-disc list-inside">
                    <li>Бассейн</li>
                    <li>Wi-Fi</li>
                    <li>Ресторан</li>
                    <li>Халяль питание</li>
                    <li>SPA</li>
                  </ul>
                )}

                {activeTab === 'policy' && (
                  <div>
                    <p>
                      <b>Заезд:</b> {selectedHotel.checkIn}
                    </p>
                    <p>
                      <b>Выезд:</b> {selectedHotel.checkOut}
                    </p>
                    <p>Отмена бронирования: Бесплатно за 24 часа до заезда.</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Оценка гостей</h4>
                  <div className="bg-blue-100 text-blue-700 font-semibold rounded p-2 inline-block mb-1">
                    {selectedHotel.guestRating}
                  </div>
                  <p className="text-sm text-gray-500">
                    Нормально
                    <br />
                    На основе {selectedHotel.guestReviewsCount} отзывов
                  </p>
                  <h4 className="font-semibold mt-4 mb-2">Расположение</h4>
                  <p className="text-sm">{selectedHotel.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Карта</h4>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={selectedHotel.mapEmbedUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Карта ${selectedHotel.name}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HalalHotelAbu;
