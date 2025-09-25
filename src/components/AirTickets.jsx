import { useState, useRef, useEffect } from "react";
import { Plane, Hotel, Map, PlaneTakeoff, Grid, Star, MapPin, Shield, Users, Globe, Award } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";


import One from "../assets/sw-1.webp";
import Two from "../assets/sw-2.webp";
import Three from "../assets/sw-3.webp";
import Four from "../assets/sw-4.webp";
import Five from "../assets/sw-5.webp"; 
import Six from "../assets/sw-6.webp";
import Seven from "../assets/sw-7.webp";
import Fon from "../assets/fon.webp"


import Tur1 from "../assets/tur-1.webp";
import Tur2 from "../assets/tur-2.webp";
import Tur3 from "../assets/tur-3.webp";


import Exkurs1 from "../assets/exkurs-1.webp";
import Exkurs2 from "../assets/exkurs-2.webp";
import Exkurs3 from "../assets/exkurs-3.webp";


import Hot1 from "../assets/hot1.jpeg";
import Hot2 from "../assets/hot2.jpg";
import Hot3 from "../assets/hot3.webp";
import Hot4 from "../assets/hot4.webp";
import Hot5 from "../assets/hot5.webp";


import Exclusiv1 from "../assets/Exclusiv1.webp";
import Exclusiv2 from "../assets/Exclusiv2.jpg";
import Exclusiv3 from "../assets/Exclusiv3.jpg";
import Exclusiv4 from "../assets/Exclusiv4.jpg";
import Exclusiv5 from "../assets/Exclusiv5.jpg";

export default function TravelApp() {
  const [activeTab, setActiveTab] = useState("avia");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const tabs = [
    { id: "avia", label: "Авиабилеты", icon: <Plane size={18} /> },
    { id: "hotels", label: "Отели", icon: <Hotel size={18} /> },
    { id: "tours", label: "Турпакеты", icon: <Map size={18} /> },
    { id: "charter", label: "Чартер", icon: <PlaneTakeoff size={18} /> },
    { id: "services", label: "Услуги", icon: <Grid size={18} /> },
  ];

  const images = [One, Two, Three, Four, Five, Six, Seven];

  const hotels = [
    { name: "Sah Inn Paradise (Halal Concept)", location: "Анталья", image: Hot1, rating: 5.0 },
    { name: "Bera Hotel Alanya", location: "Анталья", image: Hot2, rating: 5.0 },
    { name: "Rizom Beach (Halal Concept)", location: "Анталья", image: Hot3, rating: 5.0 },
    { name: "Modern Saraylar - All Inclusive", location: "Анталья", image: Hot4, rating: 5.0 },
    { name: "Selge Beach Resort & Spa - All Inclusive", location: "Анталья", image: Hot5, rating: 5.0 },
  ];

  const exclusiveHotels = [
    { name: "Хо Саре Аппи Resort", location: "Даланеи", image: Exclusiv1 },
    { name: "Хо Саре Аппи Glou", location: "Даланеи", image: Exclusiv2 },
    { name: "Пёплс Dplusa Golf Balek", location: "Ангели", image: Exclusiv3 },
    { name: "Silk Road By Minyoun", location: "Узбекинстан", image: Exclusiv4 },
    { name: "Ску Palace Hotel", location: "Узбекинстан", image: Exclusiv5 },
  ];

  const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="min-h-screen bg-gray-50">
 
      <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="text-2xl font-bold">Asialuxe Travel</div>
        <div className="flex items-center space-x-5 text-sm">
          <a href="#">Агентствам</a>
          <a href="#">RU / USD</a>
          <a href="#" className="flex items-center space-x-1">
            <span>Войти</span>
          </a>
        </div>
      </header>


      <div className="flex justify-center mt-4">
        <div className="flex bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-2xl space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition font-medium
                ${activeTab === tab.id
                  ? "bg-white text-blue-600 shadow"
                  : "text-white hover:bg-blue-500 hover:bg-opacity-30"
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

 
      <div className="mt-10 px-8">
        {activeTab === "avia" && (
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-4 grid grid-cols-6 gap-3">
            <input type="text" placeholder="Откуда" className="col-span-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Куда" className="col-span-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <input type="date" className="col-span-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <input type="date" className="col-span-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" />
            <select className="col-span-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
              <option>1 Пассажир, Эконом</option>
              <option>2 Пассажира, Эконом</option>
              <option>1 Пассажир, Бизнес</option>
            </select>
            <button className="col-span-1 bg-lime-400 text-white font-semibold rounded-lg shadow-md hover:bg-lime-500 transition">
              Поиск
            </button>
          </div>
        )}

        {activeTab !== "avia" && (
          <div className="text-center text-gray-700 text-lg mt-10">
            Раздел "{tabs.find((t) => t.id === activeTab)?.label}" скоро будет доступен 🚀
          </div>
        )}
      </div>

    
      <div className="flex justify-between items-stretch gap-6 px-8 mt-10">
        <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onSwiper={setSwiperInstance}
            className="rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="relative">
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover rounded-xl" />
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={prevRef} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <GrFormPrevious />
          </button>
          <button ref={nextRef} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <MdOutlineNavigateNext />
          </button>
        </div>

        <div className="w-[400px] h-[400px] relative rounded-xl overflow-hidden shadow-lg">
          <img src={Fon} alt="Предложение дня" className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-md text-sm">
            АКЦИЯ
          </span>
        </div>
      </div>

   
      <div className="bg-amber-50 py-20">
        <div className="px-8 mx-auto">
          <p className="text-2xl font-bold text-gray-900">Горящие туры</p>
          <p className="text-blue-700 text-2xl font-bold">Выберите направление</p>
          <div className="flex justify-between py-4 gap-4">
            <img src={Tur1} alt="" className="w-[33%] rounded-lg" />
            <img src={Tur2} alt="" className="w-[33%] rounded-lg" />
            <img src={Tur3} alt="" className="w-[33%] rounded-lg" />
          </div>
        </div>

        <div className="px-8 mx-auto py-10">
          <p className="text-2xl font-bold text-gray-900">Экскурсионные туры</p>
          <div className="flex justify-between py-4 gap-4">
            <img src={Exkurs1} alt="" className="w-[33%] rounded-lg" />
            <img src={Exkurs2} alt="" className="w-[33%] rounded-lg" />
            <img src={Exkurs3} alt="" className="w-[33%] rounded-lg" />
          </div>
        </div>
      </div>

 
      <div className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Халяль отели <span className="text-blue-600 cursor-pointer">Asialuxe</span></h2>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center">Посмотреть все <span className="ml-1">→</span></a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold flex items-center px-2 py-1 rounded-full">
                  ⭐ {hotel.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{hotel.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" /> {hotel.location}
                </div>
                <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="px-6 py-8 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Эксклюзивные отели <span className="text-blue-600">Asialuxe</span></h2>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center font-medium">Посмотреть все <span className="ml-2">→</span></a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {exclusiveHotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold flex items-center px-2 py-1 rounded-full">
                  ⭐ 5.0
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{hotel.name}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {hotel.location}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему мы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Профессионализм и опыт
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Команда Asialuxe Travel состоит из высококвалифицированных специалистов 
                с многолетним опытом работы в туристической индустрии.
              </p>
            </div>

      
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Широкий спектр услуг
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Компания предлагает как готовые турпакеты, так и индивидуальные туры, 
                учитывающие все пожелания клиентов.
              </p>
            </div>


            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Надежность и безопасность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Asialuxe Travel гарантирует надежность всех предоставляемых услуг 
                и безопасность во время путешествий.
              </p>
            </div>


            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Компания учитывает все пожелания и предпочтения клиентов, 
                предлагая персонализированные решения.
              </p>
            </div>
          </div>
        </div>
      </div>


      <footer className="bg-blue-600 text-gray-300 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Asialuxe Travel</h3>
            <p className="text-sm leading-relaxed">
              Ваш надежный партнер в мире путешествий. Мы предлагаем туры, авиабилеты, отели и персональные маршруты.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Авиабилеты</a></li>
              <li><a href="#" className="hover:underline">Отели</a></li>
              <li><a href="#" className="hover:underline">Турпакеты</a></li>
              <li><a href="#" className="hover:underline">Чартер</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">О нас</a></li>
              <li><a href="#" className="hover:underline">Почему мы</a></li>
              <li><a href="#" className="hover:underline">Отзывы</a></li>
              <li><a href="#" className="hover:underline">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Ташкент, Узбекистан</li>
              <li>📞 +998 (90) 123-45-67</li>
              <li>📧 info@asialuxe.uz</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Asialuxe Travel. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
