import { useState } from 'react'
import './App.css'

import photo1 from './assets/photos/1.jpg'
import photo2 from './assets/photos/2.jpg'
import photo3 from './assets/photos/3.jpg'
import photo4 from './assets/photos/4.jpg'
import photo5 from './assets/photos/5.jpg'
import photo6 from './assets/photos/6.jpg'
import photo7 from './assets/photos/7.jpg'
import photo8 from './assets/photos/8.jpg'
import photo9 from './assets/photos/9.jpg'
import photo10 from './assets/photos/10.jpg'
import photo11 from './assets/photos/11.jpg'
import photo12 from './assets/photos/12.jpg'
import photo13 from './assets/photos/13.jpg'
import photo14 from './assets/photos/14.jpg'
import photo15 from './assets/photos/15.jpg'

// Временные данные — позже мы заменим их на реальные тексты
const projectData = {
  ru: {
    title: "Parki ar minda",
    intro: "„Parki ar minda“ («Пакет не нужен») — экологическая организация, которая с 2020 года помогает жителям Тбилиси сортировать мусор. За 2025 год команде „Parki ar minda“ удалось привлечь к сортировке мусора 25 000 тбилисцев и собрать 115 000 тонн отходов. С организацией сотрудничают 65 волонтёров: они принимают и сортируют мусор в трёх точках города — в районах Ваке, Сабуртало и Чугурети.\n\nЯ живу в Тбилиси с 2022 года, но об организации узнала раньше — от подруги, которая волонтёрила в „Parki ar minda“ практически с самого её основания. Мне — часто пребывающей в оцепенении перед экологической катастрофой — было важно узнать поближе людей, которые нашли в себе силы объединиться и действовать вопреки общей тревоге.",
    photos: [
      { id: 1, src: photo1, caption: "Здесь будет подпись к первой фотографии (портрет у стены)." },
      { id: 2, src: photo2, caption: "Здесь будет подпись ко второй фотографии (граффити)." },
      { id: 3, src: photo3, caption: "Здесь будет подпись к третьей фотографии (сортировка)." },
      { id: 4, src: photo4, caption: "Здесь будет подпись к четвертой фотографии (девушка на складе)." },
      { id: 5, src: photo5, caption: "Здесь будет подпись к пятой фотографии (группа волонтеров)." },
      { id: 6, src: photo6, caption: "Здесь будет подпись к шестой фотографии (коробка с лампочками)." },
      { id: 7, src: photo7, caption: "Здесь будет подпись к седьмой фотографии (девушка на складе, другой ракурс)." },
      { id: 8, src: photo8, caption: "Здесь будет подпись к восьмой фотографии (ребенок у контейнеров)." },
      { id: 9, src: photo9, caption: "Здесь будет подпись к девятой фотографии (собака у ящика со стеклом)." },
      { id: 10, src: photo10, caption: "Здесь будет подпись к десятой фотографии (мужчина со смартфоном у гаража)." },
      { id: 11, src: photo11, caption: "Здесь будет подпись к одиннадцатой фотографии (женщина на складе)." },
      { id: 12, src: photo12, caption: "Здесь будет подпись к двенадцатой фотографии (стол с деталями для переработки)." },
      { id: 13, src: photo13, caption: "Здесь будет подпись к тринадцатой фотографии (девушка у красных ворот)." },
      { id: 14, src: photo14, caption: "Здесь будет подпись к четырнадцатой фотографии (сбор стекла на улице)." },
      { id: 15, src: photo15, caption: "Здесь будет подпись к пятнадцатой фотографии (собака и девушка в гараже)." },
    ]
  },
  en: {
    title: "Parki ar minda",
    intro: "“Parki ar minda” (“No bag needed”) is an environmental organization that has been helping Tbilisi residents sort their waste since 2020. In 2025, the “Parki ar minda” team managed to attract 25,000 Tbilisi residents to waste sorting and collected 115,000 tons of waste. 65 volunteers collaborate with the organization: they receive and sort waste at three locations in the city — in the Vake, Saburtalo, and Chugureti districts.\n\nI have lived in Tbilisi since 2022, but I learned about the organization earlier — from a friend who has been volunteering at “Parki ar minda” almost since its foundation. For me — often paralyzed in front of an environmental catastrophe — it was important to get to know the people who found the strength to unite and act despite the general anxiety.",
    photos: [
      { id: 1, src: photo1, caption: "Caption for the first photo goes here." },
      { id: 2, src: photo2, caption: "Caption for the second photo goes here." },
      { id: 3, src: photo3, caption: "Caption for the third photo goes here." },
      { id: 4, src: photo4, caption: "Caption for the fourth photo goes here." },
      { id: 5, src: photo5, caption: "Caption for the fifth photo goes here." },
      { id: 6, src: photo6, caption: "Caption for the sixth photo goes here." },
      { id: 7, src: photo7, caption: "Caption for the seventh photo goes here." },
      { id: 8, src: photo8, caption: "Caption for the eighth photo goes here." },
      { id: 9, src: photo9, caption: "Caption for the ninth photo goes here." },
      { id: 10, src: photo10, caption: "Caption for the tenth photo goes here." },
      { id: 11, src: photo11, caption: "Caption for the eleventh photo goes here." },
      { id: 12, src: photo12, caption: "Caption for the twelfth photo goes here." },
      { id: 13, src: photo13, caption: "Caption for the thirteenth photo goes here." },
      { id: 14, src: photo14, caption: "Caption for the fourteenth photo goes here." },
      { id: 15, src: photo15, caption: "Caption for the fifteenth photo goes here." },
    ]
  }
};

function App() {
  const [lang, setLang] = useState('ru');
  const currentData = projectData[lang];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="project-title">{currentData.title}</h1>
        <div className="lang-switcher">
          <button 
            className={lang === 'ru' ? 'active' : ''} 
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <span>/</span>
          <button 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main className="horizontal-scroll">
        {/* Панель со вступительным текстом */}
        <section className="panel intro-panel">
          <div className="intro-text">{currentData.intro}</div>
        </section>

        {/* Панели с фотографиями */}
        {currentData.photos.map((photo, index) => (
          <section key={photo.id} className="panel photo-panel">
            <div className="accent-line-container">
              <div className="accent-line"></div>
            </div>
            <div className="photo-content">
              <img src={photo.src} alt={`Photo ${index + 1}`} className="photo-img" />
              <p className="photo-caption">{photo.caption}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
