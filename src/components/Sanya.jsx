import antaliya from "../assets/ANTALIYA.webp";
import holidays from "../assets/Holidays.webp";
import maldivi from "../assets/maldivi.webp";
import ozkaymak from "../assets/OZKAYMAK_HOTELES.webp";
import top from "../assets/top.webp";

export function Sanya() {
  const videos = [
    { id: 1, title: "Болгария", url: "https://www.youtube.com/embed/Xmk5xhU_cGo" },
    { id: 2, title: "Гоа", url: "https://www.youtube.com/embed/4pLI3J7qSI4" },
    { id: 3, title: "Шри-Ланка", url: "https://www.youtube.com/embed/WO_EDWj8kXA" },
    { id: 4, title: "Турция", url: "https://www.youtube.com/embed/VirYLZnbR4k" },
    { id: 5, title: "Пхукет", url: "https://www.youtube.com/embed/qX6FO8O3GkU" },
    { id: 6, title: "Хургада", url: "https://www.youtube.com/embed/qX6FO8O3GkU" },
  ];

  const news = [
    { id: 1, date: "2025.09.20", title: "Горящие туры в Анталию", link: "https://asialuxe.uz/news/736", image: antaliya },
    { id: 2, date: "2025.09.18", title: "Лучшие праздничные предложения", link: "https://asialuxe.uz/news/732", image: holidays },
    { id: 3, date: "2025.09.16", title: "Мальдивы ждут вас", link: "https://asialuxe.uz/news/729", image: maldivi },
    { id: 4, date: "2025.09.14", title: "Отдых в OZKAYMAK Hotels", link: "https://asialuxe.uz/news/727", image: ozkaymak },
    { id: 5, date: "2025.09.10", title: "ТОП-места для путешествий", link: "https://asialuxe.uz/news/724", image: top },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Видео */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Видео</h2>
        <a href="#all-videos" style={{ textDecoration: "none", color: "blue" }}>
          Посмотреть все →
        </a>
      </div>
      <div style={{ display: "flex", gap: "15px", marginBottom: "40px" }}>
        {videos.slice(0, 5).map((video) => ( // только 5 на главной
          <div key={video.id} style={{ width: "250px", textAlign: "center" }}>
            <iframe
              width="100%"
              height="160"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Новости */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Новости</h2>
        <a href="#all-news" style={{ textDecoration: "none", color: "blue" }}>
          Все новости →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "15px" }}>
        {news.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "black",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <small style={{ color: "gray", display: "block", marginBottom: "5px" }}>{item.date}</small>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.3em" }}>{item.title}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Блок "Все видео" */}
      <div id="all-videos" style={{ marginTop: "60px" }}>
        <h2>Все видео</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {videos.map((video) => (
            <div key={video.id} style={{ textAlign: "center" }}>
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Блок "Все новости" */}
      <div id="all-news" style={{ marginTop: "60px" }}>
        <h2>Все новости</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {news.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                background: "#fff",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
              <div style={{ padding: "10px" }}>
                <small style={{ color: "gray", display: "block", marginBottom: "5px" }}>{item.date}</small>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.3em" }}>{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
