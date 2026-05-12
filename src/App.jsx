import { useState } from 'react'
import './App.css'

import photo1 from './assets/photos/1.jpg'
import photo2 from './assets/photos/2.jpg'
import photo3 from './assets/photos/3.jpg'
import photo4 from './assets/photos/4.jpg'
import photo5 from './assets/photos/5.jpg'

// Временные данные — позже мы заменим их на реальные тексты
const projectData = {
  ru: {
    title: "Parki ar minda",
    intro: "Это фотопроект, посвященный организации Parki ar minda. Они собирают мусор для дальнейшей переработки.\n\nЗдесь будет ваш вступительный текст. Вы можете написать его в несколько абзацев, и они будут отображаться так же красиво.",
    photos: [
      { id: 1, src: photo1, caption: "Здесь будет подпись к первой фотографии (портрет у стены)." },
      { id: 2, src: photo2, caption: "Здесь будет подпись ко второй фотографии (граффити)." },
      { id: 3, src: photo3, caption: "Здесь будет подпись к третьей фотографии (сортировка)." },
      { id: 4, src: photo4, caption: "Здесь будет подпись к четвертой фотографии (девушка на складе)." },
      { id: 5, src: photo5, caption: "Здесь будет подпись к пятой фотографии (группа волонтеров)." },
    ]
  },
  en: {
    title: "Parki ar minda",
    intro: "This is a photo project dedicated to the organization Parki ar minda. They collect trash for further recycling.\n\nYour introductory text will be here. You can write it in several paragraphs, and they will be displayed just as beautifully.",
    photos: [
      { id: 1, src: photo1, caption: "Caption for the first photo goes here." },
      { id: 2, src: photo2, caption: "Caption for the second photo goes here." },
      { id: 3, src: photo3, caption: "Caption for the third photo goes here." },
      { id: 4, src: photo4, caption: "Caption for the fourth photo goes here." },
      { id: 5, src: photo5, caption: "Caption for the fifth photo goes here." },
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
              <div className="photo-counter">{index + 1} / {currentData.photos.length}</div>
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
