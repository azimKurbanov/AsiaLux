"use client"

import { useState } from "react"
import  Abu  from "../components/HalalHotelAbu"

const hotels = [
  {
    id: 1,
    name: "Xo Cape Arma Resort",
    location: "Далянан",
    rating: 5.0,
    description: "Роскошный халяль-отель на побережье.",
    checkIn: "14:00",

    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=320&fit=crop",
    ],
    guestRating: 4.5,
    guestReviewsCount: 120,
    address: "Dalyan, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d28.6!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzAwLjAiTiAyOMKwMzYnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 2,
    name: "Xo Cape Arma Club",
    location: "Далянан",
    rating: 5.0,
    description: "Семейный отель с халяль концепцией.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=320&fit=crop",
    ],
    guestRating: 4.7,
    guestReviewsCount: 90,
    address: "Dalyan, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d28.6!3d36.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzAwLjAiTiAyOMKwMzYnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 3,
    name: "Titanic Deluxe Golf Belek",
    location: "Анталья",
    rating: 5.0,
    description: "Прекрасное место для отдыха с гольф-полем.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=320&fit=crop",
    ],
    guestRating: 4.8,
    guestReviewsCount: 105,
    address: "Belek, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d30.8!3d36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiTiAzMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 4,
    name: "Silk Road By Minyoun",
    location: "Узбекистан",
    rating: 5.0,
    description: "Современный отель в центре города.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=320&fit=crop",
    ],
    guestRating: 4.6,
    guestReviewsCount: 87,
    address: "Tashkent, Uzbekistan",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d69.2!3d41.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAwLjAiTiA2OcKwMTInMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 5,
    name: "City Palace Hotel",
    location: "Узбекистан",
    rating: 5.0,
    description: "Роскошный отель в историческом центре.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=320&fit=crop",
    ],
    guestRating: 4.9,
    guestReviewsCount: 140,
    address: "Samarkand, Uzbekistan",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d66.9!3d39.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzncsDM2JzAwLjAiTiA2NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 6,
    name: "Grand Shosh Hotel",
    location: "Узбекистан",
    rating: 5.0,
    description: "Элегантный отель с традиционным дизайном.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
    ],
    guestRating: 4.4,
    guestReviewsCount: 77,
    address: "Bukhara, Uzbekistan",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d64.4!3d39.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzncsDQyJzAwLjAiTiA2NMKwMjQnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 7,
    name: "Hotel Ansi Boutique West Palace",
    location: "Узбекистан",
    rating: 5.0,
    description: "Бутик-отель с уникальной архитектурой.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
    ],
    guestRating: 4.7,
    guestReviewsCount: 95,
    address: "Khiva, Uzbekistan",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d60.3!3d41.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAwLjAiTiA2MMKwMTgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 8,
    name: "Rixos Premium Gocek",
    location: "Анталья",
    rating: 5.0,
    description: "Премиум курорт на берегу моря.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=320&fit=crop",
    ],
    guestRating: 4.8,
    guestReviewsCount: 130,
    address: "Gocek, Mugla, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d28.9!3d36.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzAwLjAiTiAyOMKwNTQnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 9,
    name: "Rixos Premium Bodrum",
    location: "Анталья",
    rating: 5.0,
    description: "Роскошный курорт с видом на Эгейское море.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=320&fit=crop",
    ],
    guestRating: 4.6,
    guestReviewsCount: 115,
    address: "Bodrum, Mugla, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d27.4!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAyJzAwLjAiTiAzMcKwMTgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 10,
    name: "Kaya Side",
    location: "Анталья",
    rating: 5.0,
    description: "Семейный курорт с аквапарком.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=320&fit=crop",
    ],
    guestRating: 4.5,
    guestReviewsCount: 98,
    address: "Side, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d31.3!3d36.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzAwLjAiTiAzMcKwMTgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 11,
    name: "Kaya Belek Hotel",
    location: "Анталья",
    rating: 5.0,
    description: "Отель рядом с гольф-полями.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=320&fit=crop",
    ],
    guestRating: 4.7,
    guestReviewsCount: 88,
    address: "Belek, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d30.8!3d36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiTiAzMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 12,
    name: "Gural Premier Tekirova",
    location: "Анталья",
    rating: 5.0,
    description: "Курорт в окружении гор и моря.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=320&fit=crop",
    ],
    guestRating: 4.6,
    guestReviewsCount: 102,
    address: "Tekirova, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d30.5!3d36.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzAwLjAiTiA2NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 13,
    name: "Gural Premier Beleklek",
    location: "Анталья",
    rating: 5.0,
    description: "Премиум отель с частным пляжем.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=320&fit=crop",
    ],
    guestRating: 4.8,
    guestReviewsCount: 125,
    address: "Belek, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d30.8!3d36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiTiAzMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 14,
    name: "Regnum Carya",
    location: "Анталья",
    rating: 5.0,
    description: "Эксклюзивный гольф-курорт.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=320&fit=crop",
    ],
    guestRating: 4.9,
    guestReviewsCount: 145,
    address: "Belek, Antalya, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d30.8!3d36.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU0JzAwLjAiTiAzMMKwNDgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
  {
    id: 15,
    name: "Titanic Luxury Collection Bodrum",
    location: "Анталья",
    rating: 5.0,
    description: "Люксовый курорт на берегу Эгейского моря.",
    checkIn: "14:00",
    checkOut: "11:00",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=320&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=320&fit=crop",
    ],
    guestRating: 4.8,
    guestReviewsCount: 138,
    address: "Bodrum, Mugla, Turkey",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d27.4!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAyJzAwLjAiTiAzMcKwMTgnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str",
  },
]

function HotelCard({ hotel, onClick }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      onClick={() => onClick(hotel)}
    >
      <img src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} className="w-full h-80 object-cover" />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-3 left-3 bg-red-400 text-black font-semibold text-sm px-3 py-1 rounded-full shadow">
        Haram
      </div>

      <div className="absolute top-3 right-3 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
        <span>⭐️</span>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {hotel.location}
        </p>
        <button className="mt-4 w-full bg-white/10 backdrop-blur text-white text-sm font-medium py-2 rounded-lg border border-white/30 hover:bg-white/20 transition">
          Подробнее
        </button>
      </div>
    </div>
  )
}

const HalalHotelComponent = () => {
  const [visibleCount, setVisibleCount] = useState(5)
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

  const handleShowMore = () => setVisibleCount(hotels.length)
  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel)
    setActiveTab("overview")
  }
  const handleCloseModal = () => setSelectedHotel(null)

  const visibleHotels = hotels.slice(0, visibleCount)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <Abu />
      <div className="items-center mb-6">
        <h2 className="text-2xl font-semibold mb-6">
          Харам отели{" "}
          <a href="#" className="text-blue-600">
            Asialuxe
          </a>
        </h2>
        {visibleCount < hotels.length && (
          <div className="mt-6 text-right">
            <button onClick={handleShowMore} className="text-blue-600 font-semibold hover:underline">
              Посмотреть все →
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {visibleHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onClick={handleCardClick} />
        ))}
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
                  src={img || "/placeholder.svg"}
                  alt={`${selectedHotel.name} photo ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedHotel.name}</h3>
              <div className="flex items-center mb-4 space-x-4">
                <div className="text-yellow-500 font-bold">
                  ★★★★★ <span className="text-gray-800 ml-1">{selectedHotel.rating.toFixed(1)}</span>
                </div>
                <div className="text-gray-600 text-sm">📍 {selectedHotel.location}</div>
              </div>
              <ul className="flex space-x-4 border-b mb-4 text-sm font-medium text-gray-600 cursor-pointer select-none">
                <li
                  className={`pb-2 ${
                    activeTab === "overview"
                      ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                      : "border-b-2 border-transparent"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Обзор
                </li>
                <li
                  className={`pb-2 ${
                    activeTab === "amenities"
                      ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                      : "border-b-2 border-transparent"
                  }`}
                  onClick={() => setActiveTab("amenities")}
                >
                  Удобства
                </li>
                <li
                  className={`pb-2 ${
                    activeTab === "policy"
                      ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                      : "border-b-2 border-transparent"
                  }`}
                  onClick={() => setActiveTab("policy")}
                >
                  Политика
                </li>
              </ul>

              <div className="mb-6 min-h-[100px] text-gray-700">
                {activeTab === "overview" && <p>{selectedHotel.description}</p>}

                {activeTab === "amenities" && (
                  <ul className="list-disc list-inside">
                    <li>Бассейн</li>
                    <li>Wi-Fi</li>
                    <li>Ресторан</li>
                    <li>Халяль питание</li>
                    <li>SPA</li>
                  </ul>
                )}

                {activeTab === "policy" && (
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
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="hotel map"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HalalHotelComponent
